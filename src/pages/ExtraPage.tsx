import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CompanyCard from "../components/CompanyCard";
import Button from "../components/Button";

interface IPost {
  id: any;
  title: string;
  body: string;
}

function ExtraPage() {
  const [post, setPost] = useState<IPost>();
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => setPost(result.data));
  }, [id]);

  useEffect(() => {
    setIsLoading(false);
  }, [post]);

  function next() {
    setId(id + 1);
    console.log(id);
    if (id >= 100) {
      setId(1);
    }
  }
  function prev() {
    setId(id - 1);
    console.log(id);
    if (id <= 1) {
      setId(100);
    }
  }

  return (
    <>
      {isLoading ? (
        <h1 style={{ height: "100px" }}>LOADING...</h1>
      ) : (
        <CompanyCard
          // @ts-ignore
          key={post.id}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"
          // @ts-ignore
          companyName={post.title}
          // @ts-ignore
          companyDesc={post.body}
        />
      )}

      <Buttons>
        <Button text="<" func={prev} />
        <Button text=">" func={next} />
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
