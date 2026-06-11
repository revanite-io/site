import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackgroundArcs } from "./components/BackgroundArcs";
import { CRALayout } from "./components/CRALayout";
import { HomePage } from "./pages/HomePage";
import { ApplicationPage } from "./pages/ApplicationPage";
import { DebriefPage } from "./pages/DebriefPage";
import { CRAResearchPage } from "./pages/CRAResearchPage";
import { CRAFieldGuidePage } from "./pages/CRAFieldGuidePage";
import { CRAResourcesPage } from "./pages/CRAResourcesPage";

const HomeLayout: React.FC = () => {
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
        <Outlet />
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<ApplicationPage />} />
          <Route path="/2025-debrief" element={<DebriefPage />} />
        </Route>
        <Route element={<CRALayout />}>
          <Route path="/cra" element={<CRAResearchPage />} />
          <Route path="/cra/field-guide" element={<CRAFieldGuidePage />} />
          <Route path="/cra/resources" element={<CRAResourcesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
