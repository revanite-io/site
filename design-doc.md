## **1\. Design Concept: "Sharp Contrast"**

The aesthetic identity emphasizes **high contrast** and **modern professionalism** with a focus on the Revanite brand.

* **Visual Direction:** "Sharp Dark Mode." Pure black backgrounds with bright, vibrant cyan accents to create maximum contrast and visual impact. The design uses the Revanite logo color (#3AD0E6) as the foundation, brightened to #4AE0F0 for enhanced visibility.  
* **Key Design Elements:** Glassmorphism (layered, semi-transparent UI cards), animated background arcs, and clean typography with strong visual hierarchy.

### **Brand Style Guide Summary**

| Element | Specification | Rationale |
| :---- | :---- | :---- |
| **Primary Background** | \#000000 (Pure Black) | Creates sharp contrast and modern aesthetic; maximizes the impact of bright accent colors. |
| **Accent Colors** | Revanite Cyan (\#4AE0F0), based on logo color (\#3AD0E6) | Bright, vibrant cyan that complements the Revanite logo; creates strong visual hierarchy. |
| **Surface Colors** | rgba(0, 0, 0, 0.75) for cards/surfaces | Near-black surfaces maintain the sharp aesthetic while allowing for layered depth. |
| **Text Colors** | \#f0fbfc (primary), \#b0d4d6 (subtle) | Bright text ensures excellent readability on pure black backgrounds. |
| **Typography** | **Inter** (system font stack) | Clean, modern sans-serif that maintains readability and professional appearance. |
| **Headings Font** | **Space Grotesk** | Geometric and 
architectural. |
| **Code Font** | **JetBrains Mono** | Signals technical 
legitimacy to engineers. |


---

## **2\. Information Architecture (Sitemap)**

The site uses a simple, focused navigation structure optimized for clarity and ease of use.

* **Primary Navigation:**  
  * **Platform:** Overview, Capabilities (Policy as Code, Monitoring), Integrations, Open Source (Privateer).  
  * **Solutions:** By Role (CISO, Architect), By Industry (Financial Services, Healthcare).  
  * **Resources:** Documentation (Ungated), Blog, Policy Library, Case Studies.  
  * **Company:** About, Trust Center, Careers.  
* **Persistent CTAs:**  
  * *Secondary:* "Try our Open Source Software" (Low friction).  
  * *Primary:* "Apply for Private Beta" (High conversion).

---

## **3\. User Flows**

The site provides straightforward navigation and clear paths to engagement.

### **Main Navigation Flow**

1. **Landing:** User arrives at homepage with hero section and key content areas.  
2. **Exploration:** TBD
3. **Application:** User fills out application form with context, stakes, stakeholders, and contact information.

### **Content Structure**

### **The Technical Discovery Flow**

1. **Landing:** User arrives at the Open Source / Privateer section.  
2. **Interaction:** User interacts with the "Interactive Policy Editor" (converts English to YAML).  
3. **Conversion:** CTA triggers: "Want to manage risk at scale? Explore our Enterprise Platform."

---

## **4\. Key Page Specifications**

### **A. Homepage**

* **Header Section:** Large hero area with site title "Revanite" and navigation.  
* **Interaction Section:** 3D WebGL visualization of a "Policy 
Pipeline."  
* **Trust Bar:** Static logos of FINOS, Linux Foundation, and 
OpenSSF to establish immediate credibility.
* **The Bento Grid:** A responsive grid showcasing Continuous 
Monitoring, Unified Dashboards, and the Open Source Core.
* **Technical Schematic:** A diagram showing Revanite as the 
orchestration layer between infrastructure and auditors.

### **B. Platform Page (The Governance Engine)**

* **Technical Schematic:** A diagram showing Revanite as the orchestration layer between infrastructure and auditors.  
* **Policy Editor Widget:** A live code block where users toggle between "Human Readable" and "Rego/YAML" code.

### **C. Solutions: Financial Services**

* **Feature Focus:** Native support for **FINOS Common Cloud Controls**.  
* **Messaging:** Focus on DORA and Basel III compliance.  
* **Social Proof:** Anonymized case study of a Tier-1 bank reducing audit prep by 80%.

---

## **5\. Technical Stack & Performance**

The site is built with modern React tooling for optimal performance and developer experience.

* **Framework:** **React 19** with **Vite 7** for fast development and optimized builds.  
* **Routing:** **React Router DOM 7** for client-side routing and navigation.  
* **Styling:** **CSS Variables** with custom theme system for maintainable, themeable styles. Glassmorphism effects via backdrop-filter.  
* **TypeScript:** Full type safety throughout the application.  
* **Build Tool:** **Vite** provides fast HMR and optimized production builds.  
* **Accessibility:** Semantic HTML and proper ARIA attributes for screen reader support.

---
