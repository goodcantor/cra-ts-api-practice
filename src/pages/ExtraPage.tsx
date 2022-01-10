import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CompanyCard from "../components/CompanyCard";
import Button from "../components/Button";

function ExtraPage() {
  const [post, setPost] = useState({});
  const [count, setCount] = useState(1);
  useEffect(() => {}, []);

  function prev() {
    console.log(count, setCount);
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then((response) => response.json())
      .then((result) => setPost(result));
  }

  return (
    <>
      <CompanyCard
        // @ts-ignore
        key={post.id}
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"
        // @ts-ignore
        companyName={post.title}
        // @ts-ignore
        companyDesc={post.body}
      />
      <Buttons>
        {/* @ts-ignore */}
        <Button text="<" onClick={prev} />
        {/* <Button text=">" onClick={next} /> */}
      </Buttons>
    </>
  );
}

export default ExtraPage;

const Buttons = styled.div`
  margin: 0 auto;
  display: flex;
  width: 200px;
  justify-content: space-between;
`;
