import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text?: string;
  func?: any;
}

function Button({ text, func }: ButtonProps) {
  return <ButtonMain onClick={func}>{text}</ButtonMain>;
}

export default Button;

const ButtonMain = styled.button`
  padding: 12px 28px;

  font-weight: 900;
  font-size: 24px;
  background: orange;

  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #d88c00;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Lorem = styled.p`
  font-size: 30px;
`;
