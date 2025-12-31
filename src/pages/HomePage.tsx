import React from "react";
import { PartnersSection } from "../components/PartnersSection";


export const HomePage: React.FC = () => {
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
