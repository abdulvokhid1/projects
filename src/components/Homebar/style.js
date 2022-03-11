import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Dashbar = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin-left: 120px;
  margin-right: 120px;
  justify-content: space-between;
  height: 100px;
  /* background: black; */
  position: sticky;
  align-items: center;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const Leaf = styled.div`
  display: flex;
`;
export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
export const Greenshot = styled.div`
  color: #46a358;
  font-weight: 900;
  font-size: 20px;
  margin-left: 6px;
`;
export const Home = styled.div`
  display: flex;
  align-items: center;
`;
export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 600px;
  text-decoration: none;
  margin: 12px 13px;

  color: #3d3d3d;
`;
export const Blogs = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
  margin-left: 15px;
  margin-right: 15px;
`;
export const Login = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Search = styled.img`
  margin-right: 30px;
  margin-left: 30px;
  width: 24px;
  height: 24px;
`;
export const Port = styled.img`
  margin-right: 30px;
  margin-left: 30px;
  width: 28px;

  height: 28px;
`;

export const Button = styled.button`
  margin-right: 30px;
  margin-left: 30px;
  background: #46a358;
  border-radius: 6px;
  width: 100px;
  height: 35px;
  border: none;
  display: flex;
  color: white;
  align-items: center;
  text-align: center;
`;
export const Stroke = styled.img`
  width: 8px;
  margin-left: 20px;
  margin-right: 2px;
`;
export const Number = styled.p`
  background: #46a358;
  border: none;
  border-radius: 15px;
  width: 18px;
  height: 18px;
  left: 129px;
  bottom: 6px;
  text-align: center;
  position: absolute;
`;
