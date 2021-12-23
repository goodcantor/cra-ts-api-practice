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
    background: grey;
  }

  .left {
    display: flex;
    /* align-items: center; */
  }
  .img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    margin-right: 10px;
  }
  .company-name {
    color: #21293c;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;

    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .company-desc {
    color: #21293c;
    font-size: 16px;
    line-height: 24px;

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
  }
`





const CompanyCard = (props: any) => {
  return (
    <FullCard>
      <div className="left">
        <img className='img' src="https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj" alt="" />
        <div className="text">
          <h2 className="company-name">Apple inc</h2>
          <p className="company-desc">We are changing the world</p>
        </div>
      </div>
      <div className="right">
        <div className="likes">
          123
        </div>
      </div>
    </FullCard>
  );
};

export default CompanyCard;