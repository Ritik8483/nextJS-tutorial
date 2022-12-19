import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeText}>
      Home
      <Image src="/google.svg" width="20" height="20" alt="1234567" /> {/* Simple img */}
      
      <Image     
        src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width="230"
        height="230"
        alt="123456789"
        />               
    </div>
  );
};

export default Home;
