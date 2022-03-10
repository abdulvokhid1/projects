import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import flowers from "../mock";
import bigflower from "../assets/images/bigflower.png";
import star from "../assets/icons/star.png";
import nostart from "../assets/icons/nostart.png";
import heart from "../assets/icons/heart.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import inline from "../assets/icons/inline.png";
import message from "../assets/icons/message.png";

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
  Shopflower,
  Shopflower1,
  Flowermap,
  Daisy,
  Money,
  Dollar,
  Star,
  Customer,
  Stardiv,
  Short,
  Text,
  Size,
  Sizes,
  Types,
  Minus,
  Card,
  Num,
  Plus,
  Buy,
  Add,
  Heart,
  Tags,
  Tags1,
  Tags2,
  Insta,
  Product,
  Internet,
} from "./style";
import leaf from "../../components/assets/icons/leaf.png";
import search from "../assets/icons/search.png";
import port from "../assets/icons/port.png";
import stroke from "../assets/icons/stroke.png";
const style = {
  color: "red",
};

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
              <Shopflower>
                {flowers.map((value) => {
                  return <Flowermap key={value.id} src={value.item} alt="" />;
                })}
              </Shopflower>
              <Shopflower1 src={bigflower} />
            </Shopbarprice1>
            <Shopbarprice2>
              <Daisy>Barberton Daisy</Daisy>
              <Dollar>
                <Money>$119.00</Money>
                <Stardiv>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={nostart} />
                  <Customer>19 Customer Review</Customer>
                </Stardiv>
              </Dollar>
              <Short>Short Description</Short>
              <Text>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </Text>
              <Size>Size:</Size>
              <Sizes>
                <Types>S</Types>
                <Types>M</Types>
                <Types>L</Types>
                <Types>XL</Types>
              </Sizes>
              <Card>
                <Minus>-</Minus>
                <Num>1</Num>
                <Plus>+</Plus>
                <Buy>Buy Now</Buy>
                <Add>ADD TO CART</Add>
                <Heart src={heart} />
              </Card>
              <Tags>SKU: 1995751877966 </Tags>
              <Tags1>Categories: Potter Plants</Tags1>
              <Tags2>Tags: Home, Garden, Plants</Tags2>
              <Insta>
                <Product>Share this products:</Product>
                <Internet src={facebook} />
                <Internet src={twitter} />
                <Internet src={inline} />
                <Internet src={message} />
              </Insta>
            </Shopbarprice2>
          </Shopbarprice>
        </Slash>
      </Shopbar>
    </Container>
  );
};
export default Navbar;
