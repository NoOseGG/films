import React from "react";
import { Outlet } from "react-router-dom";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
