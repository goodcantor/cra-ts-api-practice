import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface IPost {
  id: any;
  name: string;
  tagline: string;
  thumbnail: {
    image_url: string;
  };
  screenshot_url: { [key: string]: string };
}

function ProductPage(props: any) {
  const location = useParams();
  const [post, setPost] = useState<IPost>({} as IPost);
  useEffect(() => {
    const baseUrl = "https://api.producthunt.com/v1";
    const endpoint = `/posts/${location.id}`;
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
      .then((response) => setPost(response.data.post));
  }, []);

  if (!post.id) return <h1>LOADING...</h1>;
  return (
    <>
      <h1>{post.name}</h1>
      <img src={post.thumbnail.image_url} alt="" />
      {/* <img src={post.screenshot_url["300px"]} alt="" /> */}
      {Object.values(post.screenshot_url).map((src) => {
        return <img src={src} alt="" />;
      })}
    </>
  );
}

export default ProductPage;
