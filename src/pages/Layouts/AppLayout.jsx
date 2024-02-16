import React from "react";

function AppLayout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f2f0e4",
        height: "180vh",
        width: "100%",
        position: "relative",
        maxWidth: "500px",
        margin: "auto",
        overflow: "hidden",
      }}
      className="app_layout"
    >
      {children}
    </div>
  );
}

export default AppLayout;
