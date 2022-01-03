import React from "react";
import styled from "styled-components";

interface CompanyCardProps {
  link?: string;
  src: string;
  companyName: string;
  companyDesc: string;
  likesNumber: number;
}

const CompanyCard = ({
  link,
  src,
  companyName,
  companyDesc,
  likesNumber,
}: CompanyCardProps) => {
  


  return (
    <FullCard href={link}> 
      <LeftCard>
        <img src={src} alt={companyName} />
        <div>
          <h2>{companyName}</h2>
          <p>{companyDesc}</p>
        </div>
      </LeftCard>
      <RightCard> 
        <div>{likesNumber}</div>
      </RightCard>
    </FullCard>
  );
};

export default CompanyCard;

const FullCard = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid grey;
  background: white;
  padding: 24px;
  margin: 12px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #e0e0e0;
  }
`;

const LeftCard = styled.div`
  display: flex;

  & > img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    margin-right: 10px;
  }

  & > div > h2 {
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    color: #21293c;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    margin-bottom: 4px;
  }

  & > div > p {
    color: #21293c;
    font-size: 16px;
    line-height: 1.3;
    text-align: left;

    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const RightCard = styled.div`
  & > div {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
    background: white;

    color: #21293c;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.1s ease-out;

    &:hover {
      background: green;
      color: white;
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
