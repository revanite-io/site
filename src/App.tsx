import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackgroundArcs } from "./components/BackgroundArcs";
import { HomePage } from "./pages/HomePage";
import { ApplicationPage } from "./pages/ApplicationPage";
import { DebriefPage } from "./pages/DebriefPage";
import { useTheme } from "./theme";

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className="cyan-theme"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--gf-font-body)",
        background: "var(--gf-color-background)",
        color: "var(--gf-color-text)",
        position: "relative"
      }}
    >
      <BackgroundArcs />
      <Header />
      <main
        className="main-content"
        style={{
          flex: 1,
          padding: "var(--gf-space-lg)",
          paddingTop: "var(--gf-space-xl)"
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<ApplicationPage />} />
          <Route path="/2025-debrief" element={<DebriefPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

