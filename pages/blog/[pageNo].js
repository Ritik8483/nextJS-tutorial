import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async () => {
  //get api use same function
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data?.map((currElem, index) => {
    return {
      params: {
        pageNo: currElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.pageNo}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  // const router=useRouter();               //dynamic routing
  // const pageNoRoute=router.query.pageNo   //you can remove blog1 to any name or blog400
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3>Id : {data?.id}</h3>
      <h3>Title : {data?.title}</h3>
      <h3>Body : {data?.body}</h3>
    </div>
  );
};

export default pageNo;
