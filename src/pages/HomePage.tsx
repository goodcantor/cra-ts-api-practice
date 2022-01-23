import React, { useEffect, useState } from "react";
import CompanyCard from "../components/CompanyCard";
import SectionTitle from "../components/SectionTitle";

import axios from "axios";

const massCompanyCard = [
  {
    src: "https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj",
    companyName: "Apple inc",
    companyDesc: "Lorem ipsum dolor sit.",
    likesNumber: 34,
  },
  {
    src: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/vjubx9lvkuyc5hdbqf26",
    companyName: "SuperDAO",
    companyDesc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    likesNumber: 484,
  },
];

function HomePage() {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(url).then((response) => setPosts(response.data));

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((posts) => setPosts(posts));
  }, []);

  const handleClick = (e: any) => {};

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);
  return (
    <>
      <SectionTitle title="Your next favorite thing 👇" />

      {massCompanyCard.map((item) => {
        const src = item.src;
        const companyName = item.companyName;
        const companyDesc = item.companyDesc;

        return (
          <CompanyCard
            key={companyName + src}
            src={src}
            companyName={companyName}
            companyDesc={companyDesc}
          />
        );
      })}
      {posts.map((post) => {
        const { id, title, body } = post;

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

export default HomePage;
