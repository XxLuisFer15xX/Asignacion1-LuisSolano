import React from "react";
import { DashboardRouter } from "../../routers/DashboardRouter";

export const Main = () => {
  return (
    <main className="body">
      <div className="contenedor">
        <DashboardRouter />
      </div>
    </main>
  );
};
