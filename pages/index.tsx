import type { NextPage } from "next";
import Head from "next/head";
import TopHeader from "./../components/TopHeader";
import React from "react";
import styles from "../styles/Home.module.css";
import HowWeWorkExample from "../components/HowWeWorkExample";
import Pricing from "../components/Pricing";
import CustomizedCare from "../components/CustomizedCare";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Medex</title>
				<meta name="Medex" content="Health care app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<TopHeader />
				<HowWeWorkExample />
				<Pricing />
				<CustomizedCare />
				<FAQ />
				<footer>
					<Footer />
				</footer>
			</main>
		</div>
	);
};

export default Home;
