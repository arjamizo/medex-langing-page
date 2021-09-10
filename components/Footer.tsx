import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.globalFooter}>
			<div className={styles.medexLogo}>Medex</div>
			<div className={styles.searchBoxLeft}>
				<span className={styles.smallText}>
					What are you looking for?
				</span>
				<input type="text" />
			</div>
			<div className={styles.learnInfo}>
				<h3>Learn</h3>
				<p>About us</p>
				<p>Our Experts</p>
				<p>How it works</p>
				<p>Purpose</p>
				<p>Investors</p>
			</div>
			<div className={styles.ContactInfo}>
				<h3>Contact</h3>
				<p>Support</p>
				<p>contact@medex.com</p>
				<div className={styles.smallIcons}>
					<p>Instagram icon</p>
					<p>Facebook icon</p>
					<p>Twitter icon</p>
				</div>
			</div>
		</div>
	);
}
