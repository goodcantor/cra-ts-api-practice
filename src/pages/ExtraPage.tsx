import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CompanyCard from "../components/CompanyCard";

function ExtraPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);



  return (
    <>
      {posts.map((post) => {
        const { userId, id, title, body } = post;

        return (
          <CompanyCard
            key={id}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"
            companyName={title}
            companyDesc={body}
          />
        );
      })}
    </>
  );
}

export default ExtraPage;
