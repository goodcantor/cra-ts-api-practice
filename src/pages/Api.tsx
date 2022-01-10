import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";

function Api() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const baseUrl = "https://api.producthunt.com/v1";
    const endpoint = "/posts";
    fetch(`${baseUrl}${endpoint}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer 7oZBpuzZ4f0lfoVU19hPMsTuOSKsTw-HHmd72ezv7YA",
        Host: "api.producthunt.com",
      },
    })
      .then((response) => response.json())
      .then((result) => setPosts(result.posts));
  }, []);
  return (
    <>
      {posts.map((post) => {
        const { id, name, tagline, thumbnail } = post;

        return (
          <CompanyCard
            key={id}
            // @ts-ignore
            src={thumbnail.image_url}
            companyName={name}
            companyDesc={tagline}
          />
        );
      })}
    </>
  );
}

export default Api;
