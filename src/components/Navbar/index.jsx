import React from "react";
import flowers from "../mock";
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
  Number,
  Dashbar,
  Shopbar,
  Slash,
  Slashword,
  Slashwords,
  Shopbarprice,
  Shopbarprice1,
  Shopbarprice2,
  Wrapper,
} from "./style";
import leaf from "../../components/assets/icons/leaf.png";
import search from "../assets/icons/search.png";
import port from "../assets/icons/port.png";
import stroke from "../assets/icons/stroke.png";

export const Navbar = () => {
  return (
    <Container>
      <Dashbar>
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
            <Number>6</Number>
          </Button>
        </Login>
      </Dashbar>
      <Shopbar>
        <Slash>
          <Wrapper>
            <Slashword>Home /</Slashword>
            <Slashwords>Shop</Slashwords>
          </Wrapper>
          <Shopbarprice>
            <Shopbarprice1>
              {flowers.map((value) => {
                return <h1>{value.item}</h1>;
              })}
            </Shopbarprice1>
            <Shopbarprice2></Shopbarprice2>
          </Shopbarprice>
        </Slash>
      </Shopbar>
    </Container>
  );
};
export default Navbar;
