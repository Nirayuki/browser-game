import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "./routes";
import { DefaultLayout } from "./components";

function App() {
  return (
    <DefaultLayout>
      <div style={{ padding: "20px" }}>
        <AppRoutes />
      </div>
    </DefaultLayout>
  );
}

export default App;
