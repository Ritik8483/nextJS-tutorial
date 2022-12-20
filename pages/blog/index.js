import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {     //get api use same function
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  console.log(data);

  return (
    <div>
      Blog\
      {data?.map((d, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
          key={d.id}
        >
          <p>{index + 1}</p>
          <Link href={`/blog/${d.id}`}>
          <h4 style={{ cursor: "pointer" }}>{d.title}</h4>
          </Link>
        </div>
      ))}
    </div> //inside folder it must be index.js file to show nesting
  );
};

export default Blog;
