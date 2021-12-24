import React from 'react';
import styled from 'styled-components'

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
  transition: all .3s ease;
  &:hover {
    background: #e0e0e0;
  }

  .left {
    display: flex;
  }
  .img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    margin-right: 10px;
  }
  .company-name {
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
  .company-desc {
    color: #21293c;
    font-size: 16px;
    line-height: 1.3;
    text-align: left;

    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .likes {
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
    transition: all .1s ease-out;

    &:hover {
      background: green;
      color: white;
    }
    &:active {
      transform: scale(.95);
    }
  }
`

interface CompanyCardProps {
  link?: string;
  src: string;
  companyName: string;
  companyDesc: string;
  likesNumber: number;
}



const CompanyCard = ({link, src, companyName, companyDesc, likesNumber}: CompanyCardProps) => {
  return (
    <FullCard href={link}>
      <div className="left">
        <img className='img' src={src} alt={companyName} />
        <div className="text">
          <h2 className="company-name">{companyName}</h2>
          <p className="company-desc">{companyDesc}</p>
        </div>
      </div>
      <div className="right">
        <div className="likes">
          {likesNumber}
        </div>
      </div>
    </FullCard>
  );
};

export default CompanyCard;