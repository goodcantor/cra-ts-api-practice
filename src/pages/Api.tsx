import React, { useState, useEffect } from "react";
import CompanyCard from "../components/CompanyCard";
import axios from "axios";

interface IPost {
  id: any;
  name: string;
  tagline: string;
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
        // Host: "api.producthunt.com",
      },
    };

    axios
      .get(`${baseUrl + endpoint}`, config)
      .then((response) => setPosts(response.data.posts));
    axios
      .get(`${baseUrl + endpoint}`, config)
      .then((response) => console.log(response.data.posts));
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
            id={id}
          />
        );
      })}
    </>
  );
}

export default Api;
