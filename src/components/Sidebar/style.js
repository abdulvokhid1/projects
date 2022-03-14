import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: white;
  height: 100vh;
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

export { Container, Link };
