import React from "react";
import { Sidebar } from "../components/Sidebar";
import { sidebar } from "../utils/sidebar";
import { Routes, Route } from "react-router-dom";
import { Container } from "./style";

export const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Routes>
        {sidebar.map((value) => {
          return (
            <Route key={value.id} path={value?.path} element={value.element} />
          );
        })}
      </Routes>
    </Container>
  );
};
export default Root;
