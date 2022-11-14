import React from "react";
import styled from "styled-components";
import SwoopLogoImg from "../logo/favicon.ico";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 39px;
  height: 39px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={SwoopLogoImg} alt="Swoop logo" />
      </LogoImg>
      <LogoText>Welcome to Swoop!</LogoText>
    </LogoWrapper>
  );
}