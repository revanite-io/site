import React from "react";
import { PartnersSection } from "../components/PartnersSection";
import { useDocumentTitle } from "../hooks/useDocumentTitle";


export const HomePage: React.FC = () => {
  useDocumentTitle("Revanite");
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%"
      }}
    >
      <PartnersSection/>
    </div>
  );
};
