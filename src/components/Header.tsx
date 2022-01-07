import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import ExtraPage from "../pages/ExtraPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

import SecondPage from "../pages/SecondPage";

function Header() {
  return (
    <>
      <HeaderMain>
        <Container>
          <HeaderImg src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg" />
          <HeaderMenu>
            <HeaderList href="/">Home</HeaderList>
            <HeaderList href="/second">Second</HeaderList>
            <HeaderList href="/extra">Extra</HeaderList>
          </HeaderMenu>
        </Container>
      </HeaderMain>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Header;

const HeaderMain = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  background: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 26px;

  width: 100%;
  margin: 0 auto;
  padding: 0px 16px;
`;
const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderImg = styled.img`
  width: auto;
  height: 60px;
  border-radius: 4px;
`;
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderList = styled.a`
  font-size: 26px;
  color: white;
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;
