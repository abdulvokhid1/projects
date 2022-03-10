import React from "react";
import { Container } from "../root/style";
import { Body } from "../components/Body";
import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export const Root = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Root;
