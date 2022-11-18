import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #57C84D;
  background-image: linear-gradient(to right, transparent 0%, #228b22 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #228b22;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: white;
  border: 2px solid #00c9ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
    const navigate = useNavigate();
    const goToViewProfilePage = () =>{
      let path = "/viewProfile";
      navigate(path);
    }
  return (
    <AccessibilityContainer>
      <RegisterButton onClick={goToViewProfilePage}>View Profile</RegisterButton>
    </AccessibilityContainer>
  );
}