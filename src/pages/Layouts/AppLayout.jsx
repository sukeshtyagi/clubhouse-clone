import React from "react";

function AppLayout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f2f0e4",
        height: " auto",
        width: "100%",
        position: "relative",
        maxWidth: "500px",
        margin: "auto",
      }}
      className="app_layout"
    >
      {children}
    </div>
  );
}

export default AppLayout;
