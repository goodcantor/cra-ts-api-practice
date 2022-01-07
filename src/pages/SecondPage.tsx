import React, {useState, useEffect} from "react";
import CompanyCard from "../components/CompanyCard";

function SecondPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const baseUrl = 'https://api.producthunt.com/v1'
    const endpoint = '/posts'
    fetch(`${baseUrl}${endpoint}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 7oZBpuzZ4f0lfoVU19hPMsTuOSKsTw-HHmd72ezv7YA',
        Host: 'api.producthunt.com',
      },
    })
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <>
      {posts.map((post) => {
        const { id, name } = post;
      

        return (
          <CompanyCard
            key={id}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"
            companyName={name}
            companyDesc={name}
          />
        );
      })}
    </>
  );
}

export default SecondPage;
