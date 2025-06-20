import React from "react";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
