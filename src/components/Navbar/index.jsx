import React from "react";
import {
  Container,
  Greenshot,
  Leaf,
  Icon,
  Home,
  Login,
  Search,
  Port,
  Button,
  Stroke,
  Blogs,
} from "./style";
import leaf from "../../components/assets/icons/leaf.png";
import search from "../assets/icons/search.png";
import port from "../assets/icons/port.png";
import stroke from "../assets/icons/stroke.png";

export const Navbar = () => {
  return (
    <Container>
      <Leaf>
        <Icon src={leaf} />
        <Greenshot>GREENSHOT</Greenshot>
      </Leaf>
      <Home>
        <Blogs>Home</Blogs>
        <Blogs>Shop</Blogs>
        <Blogs>PlantCare</Blogs>
        <Blogs>Blogs</Blogs>
      </Home>
      <Login>
        <Search src={search} />
        <Port src={port} />
        <Button>
          <Stroke src={stroke} />
          <p>Login</p>
        </Button>
      </Login>
    </Container>
  );
};
export default Navbar;
