import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>iStore</h1>

      <BlockContainerLink>
        <Link to="/"></Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <h2>Products</h2>
        </Link>
        <Link to="/my-card" style={{ textDecoration: "none" }}>
          <h2>My Card</h2>
        </Link>
        <Link to="/my-order" style={{ textDecoration: "none" }}>
          <h2>My Order</h2>
        </Link>
      </BlockContainerLink>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0062ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;

  h1 {
    color: #fff;
  }
`;
const BlockContainerLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  h2 {
    color: #fff;
    /* text-decoration:none; */
  }
`;
