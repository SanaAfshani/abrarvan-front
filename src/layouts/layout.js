import React from "react";
import TopSidebar from "./topSidebar";
import LeftSidebar from "./leftSidebar";

export default function Layout({ children }) {
  return (
    <>
      <TopSidebar />
      <div className="d-flex">
        <LeftSidebar />
        {children}
      </div>
    </>
  );
}
