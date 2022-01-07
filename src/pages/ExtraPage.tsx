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

  const { userId, id, title, body } = item;

  return (
    <>
      <CompanyCard
        key={userId + id}
        src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
        companyName={title}
        companyDesc={body}
      />
    </>
  );
}

export default ExtraPage;
