import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";
import axios from "axios";

interface IPost {
  thumbnail: {
    image_url: string;
  };
}

function Api() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const baseUrl = "https://api.producthunt.com/v1";
    const endpoint = "/posts";
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer 7oZBpuzZ4f0lfoVU19hPMsTuOSKsTw-HHmd72ezv7YA",
        Host: "api.producthunt.com",
      },
    };

    axios
      .get(`${baseUrl + endpoint}`, config)
      .then((response) => setPosts(response.data.posts));

    // fetch(`${baseUrl}${endpoint}`, {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer 7oZBpuzZ4f0lfoVU19hPMsTuOSKsTw-HHmd72ezv7YA",
    //     Host: "api.producthunt.com",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => setPosts(result.posts));
  }, []);

  if (posts.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      {posts.map((post) => {
        const { id, name, tagline, thumbnail } = post;

        return (
          <CompanyCard
            key={id}
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
