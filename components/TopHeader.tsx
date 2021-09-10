import React from "react";
import styles from "../styles/TopHeader.module.css";

export default function TopHeader() {
	return (
		<div className={styles.globalTopHeader}>
			<div className={styles.medexLogo}>MEDEX LOGO</div>
			<div className={styles.topRight}>
				<span>FAQ</span>
				<span>spanlans</span>
				<span className={styles.borderWhite}>Try it for free</span>
				<span>Log in</span>
			</div>
			<h1>Treatment, when & where You need it</h1>
			<div className={styles.logos}>
				<span>Free medical advice</span>
				<span>Licensed professionals</span>
				<span>Personalized treatment plans</span>
				<span>Shipping within 24 hours</span>
			</div>
			<div className={styles.oldLadyPicture}>**IMAGE OLD LADY**</div>
			<button className={styles.getCareButton}>Get Care</button>
		</div>
	);
}
