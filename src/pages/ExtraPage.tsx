import React, { useState, useEffect } from "react";

import CompanyCard from "../components/CompanyCard";

function ExtraPage() {
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => setPost(post));
  }, []);

  console.log(post, setPost);

  return (
    <>
      {/* <CompanyCard
        key={post.id}
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"
        companyName={post.title}
        companyDesc={post.body}
      /> */}
    </>
  );
}

export default ExtraPage;
