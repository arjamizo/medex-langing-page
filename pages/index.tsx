import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

import type {NextPage} from "next";
import HomePage from "../components/HomePage/HomePage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medex</title>
        <meta name="Medex" content="Health care app"/>
        <link rel="icon" href="#"/>
      </Head>

      <main className={styles.main}>
        <HomePage/>
      </main>
    </div>
  );
};

export default Home;
