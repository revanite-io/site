import React, { useState, useRef, useEffect } from "react";

interface Partner {
  name: string;
  logo: string;
}

// Dynamically import all image files from the partners directory
// Automatically loads any image file type (SVG, PNG, JPG, etc.)
const allModules = import.meta.glob<{ default: string }>(
  "../assets/images/partners/*", 
  { eager: true }
);

// Filter to only include image files (common image extensions)
const imageExtensions = ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif'];
const logoModules = Object.fromEntries(
  Object.entries(allModules).filter(([path]) => 
    imageExtensions.some(ext => path.toLowerCase().endsWith(ext))
  )
);

// Simple function to extract a readable name from filename
// Removes path, extension, common prefixes, and formats nicely
const getPartnerNameFromFilename = (filename: string): string => {
  // Extract just the filename without path
  const basename = filename.replace(/^.*\//, "");
  
  // Remove extension
  const nameWithoutExt = basename.replace(/\.[^/.]+$/, "");
  
  // Remove common prefixes (years, prefixes like "logo_", etc.)
  let cleaned = nameWithoutExt
    .replace(/^\d{4}_/, "") // Remove year prefixes like "2023_"
    .replace(/^logo_/i, "") // Remove "logo_" prefix
    .replace(/^icon_/i, "") // Remove "icon_" prefix
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/-/g, " "); // Replace hyphens with spaces
  
  // Capitalize first letter of each word
  return cleaned
    .split(" ")
    .filter(word => word.length > 0) // Remove empty strings
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Generate partners array from imported logos
const partners: Partner[] = Object.entries(logoModules)
  .filter(([path, module]) => {
    const hasDefault = !!module?.default;
    if (!hasDefault && import.meta.env.DEV) {
      console.warn(`Logo module missing default export: ${path}`, module);
    }
    return hasDefault;
  })
  .map(([path, module]) => ({
    name: getPartnerNameFromFilename(path),
    logo: module.default
  }));

// The Astro home page passes pre-optimised logos; without them the raw files are used.
export const PartnersSection: React.FC<{ partners?: Partner[] }> = ({ partners: optimised }) => {
  const logos = optimised ?? partners;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const isUserInteractingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const lastScrollPositionRef = useRef<number>(0);
  const scrollSpeed = 0.25; // pixels per frame

  // Triple partners for seamless infinite scroll (3x length)
  const duplicatedPartners = [...logos, ...logos, ...logos];

  // Sync ref with state
  useEffect(() => {
    isUserInteractingRef.current = isUserInteracting;
  }, [isUserInteracting]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!container || isUserInteractingRef.current) {
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      // With 3 sets, one set is 1/3 of the total width
      const oneSetWidth = scrollWidth / 3;
      const currentScroll = container.scrollLeft;

      // Calculate new scroll position
      let newScroll = currentScroll + scrollSpeed;

      // Reset when we've scrolled past one full set (when first set leaves viewport)
      // This creates seamless infinite scroll without visual jump
      if (newScroll >= oneSetWidth) {
        newScroll = newScroll - oneSetWidth;
      }

      container.scrollLeft = newScroll;

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollSpeed]);

  // Handle user interaction
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    
    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume auto-scroll after 2-3 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2500);
  };

  // Initialize last scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      lastScrollPositionRef.current = container.scrollLeft;
    }
  }, []);

  // Add native wheel listener with passive: false to properly prevent default
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheelNative = (e: WheelEvent) => {
      // Only handle horizontal scrolling
      const deltaX = e.deltaX || (e.shiftKey ? e.deltaY : 0);
      if (Math.abs(deltaX) < 0.1) return;

      handleUserInteraction();

      // Prevent ALL default scrolling
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      // Cap the scroll delta - normal speed is 0.25px/frame, 3x = 0.75px/frame
      // At 60fps that's 45px/sec. Cap wheel events to 7.5px per event (very restrictive)
      const maxDeltaPerEvent = 7.5;
      const cappedDelta = Math.sign(deltaX) * Math.min(Math.abs(deltaX), maxDeltaPerEvent);

      // Manually scroll with capped speed
      const scrollWidth = container.scrollWidth;
      // With 3 sets, one set is 1/3 of the total width
      const oneSetWidth = scrollWidth / 3;

      let newScroll = container.scrollLeft + cappedDelta;

      // Reset when we've scrolled past one full set (when first set leaves viewport)
      if (newScroll >= oneSetWidth) {
        newScroll = newScroll - oneSetWidth;
      } else if (newScroll < 0) {
        newScroll = 0;
      }

      container.scrollLeft = newScroll;
      lastScrollPositionRef.current = newScroll;
    };

    // Use native listener with passive: false to allow preventDefault
    container.addEventListener('wheel', handleWheelNative, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheelNative);
    };
  }, [handleUserInteraction]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="partners"
      aria-label="Our projects and partners"
      style={{ padding: "0.75rem 0" }}
    >
      <div
        ref={scrollContainerRef}
        onMouseDown={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onTouchMove={handleUserInteraction}
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none", /* Firefox */
          msOverflowStyle: "none", /* IE and Edge */
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2.5rem",
            width: "max-content"
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
                transition: "transform 0.2s, opacity 0.2s",
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.opacity = "1";
              }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                onError={(e) => {
                  // Hide the image if it fails to load
                  const target = e.currentTarget;
                  target.style.display = "none";
                  if (import.meta.env.DEV) {
                    console.warn(`Failed to load logo for ${partner.name}:`, partner.logo);
                  }
                }}
                style={{
                  maxHeight: "32px",
                  maxWidth: "140px",
                  objectFit: "contain",
                  width: "auto",
                  height: "auto"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

