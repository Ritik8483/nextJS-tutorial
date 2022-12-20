import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Error = () => {
  const router=useRouter();
  const handleBack=()=>{        //have to make file name as 404 only
    router.push('/');           //navigates
  }
  useEffect(()=>{
    handleBack();
  },[])
  return (
    <div>
      Error!
      <h2>Page not found</h2>
      <button onClick={handleBack}>Back</button>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default Error;
