import React from "react";
import { NavLink } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Container, Link } from "./style";

export const Sidebar = () => {
  return (
    <Container>
      {sidebar.map((parent) => (
        <NavLink
          className={"navlink"}
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
          to={parent.path}
          key={parent.id}
        >
          {parent.title}
        </NavLink>
      ))}
    </Container>
  );
};
export default Sidebar;
