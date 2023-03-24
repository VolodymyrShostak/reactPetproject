import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Container>
      <Header />
      <div className="projects">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
