import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav style={{ margin: "20px" }}>
        <ul className="ulList" style={{ display: "flex", gap: "20px" }}>
          <Link href="/home">Home</Link>       
          <Link href="/dash">Dashboard</Link>
          <Link href="/blog">Blog</Link>
        </ul>
      </nav>
      <Head>
        <title>Home page</title>
      </Head>
    </>
  );
}
