import Head from "next/head";
import React from "react";

import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import TopHeader from "./../components/TopHeader";

import type { NextPage } from "next";
import ReachOurPatients from "../components/ReachOurPatients";
import OurValues from "../components/OurValues";
import WriteToUs from "../components/WriteToUs";
import AboutUs from "../components/AboutUs";
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
				<ReachOurPatients />
				<OurValues />
				<AboutUs />
				<WriteToUs />
				<FAQ />
				<footer>
					<Footer />
				</footer>
			</main>
		</div>
	);
};

export default Home;
