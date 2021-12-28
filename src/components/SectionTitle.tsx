import React from "react";
import styled from "styled-components";
import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <div className="section-title">{title}</div>;
};

export default SectionTitle;

const SectionTitleStyled = styled.h1``;
