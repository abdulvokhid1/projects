import React from "react";
import {
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
  Link,
} from "../Homebar/style";
import leaf from "../../components/assets/icons/leaf.png";
import search from "../assets/icons/search.png";
import port from "../assets/icons/port.png";
import stroke from "../assets/icons/stroke.png";

const style = {
  color: "Green",
};

export const Homebar = () => {
  return (
    <Dashbar>
      <Leaf>
        <Icon src={leaf} />
        <Greenshot>GREENSHOT</Greenshot>
      </Leaf>
      <Home>
        <Link activeStyle={style} to={"/"}>
          Home
        </Link>
        <Link activeStyle={style} to={"/shopview"}>
          Shop
        </Link>
        <Link activeStyle={style} to={"/plantview"}>
          PlantCare
        </Link>
        <Link activeStyle={style} to={"/blogsview"}>
          Blogs
        </Link>
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
  );
};
export default Homebar;
