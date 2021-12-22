import React from 'react';
// import './CompanyCard.css'
import styled from 'styled-components'

const CardStyled = styled.p`
  font-size: 90px;
  
`



const CompanyCard = (props: any) => {
  return (
    <>
      <CardStyled>
       <div className='great'>
        {props.name}
       </div>
      </CardStyled>
    </>
  );
};

export default CompanyCard;