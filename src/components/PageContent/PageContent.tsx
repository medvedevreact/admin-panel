import React from "react";
import { AppRoutes } from "../AppRoutes/AppRoutes";
import "./PageContent.scss";

export const PageContent: React.FC = () => {
  return (
    <div className="pageContent">
      <AppRoutes />
    </div>
  );
};
