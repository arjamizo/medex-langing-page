import React from "react";
import styles from "../styles/Pricing.module.css";

export default function Pricing() {
	return (
		<div className={styles.globalPricing}>
			<h2>Affordable GP care to everyone</h2>
			<h3>
				The price does not include the cost of medications or laboratory
				diagnostics
			</h3>
			<div className={styles.priceLeftPostion}>
				<div className={styles.priceBox}>
					<p className={styles.priceOfPlan}>Health care free</p>
					<p className={styles.price}>Free</p>
					<p className={styles.benefits}>free advices</p>
					<p className={styles.benefits}>1 therapy plan</p>
				</div>
			</div>
			<div className={styles.priceRightPosition}>
				<div className={styles.priceBox}>
					<p className={styles.priceOfPlan}>Health care Basic</p>
					<p className={styles.price}>
						35 PLN<span className={styles.smallText}>monthly</span>
					</p>
					<p className={styles.benefits}>unlimited chat</p>
					<p className={styles.benefits}>medication delivery</p>
					<p className={styles.benefits}>unlimited therapy plans</p>
				</div>
				<button className={styles.tryIt}>Try it free</button>
			</div>
			<div className={styles.downloadAppBar}>
				Download the app
				<span className={styles.icons}>google play icon</span>
				<span className={styles.icons}>apple store icon</span>
			</div>
		</div>
	);
}
