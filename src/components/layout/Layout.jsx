import React from "react";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <main className="min-h-screen flex flex-col bg-neutral-100">
        {props.children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
