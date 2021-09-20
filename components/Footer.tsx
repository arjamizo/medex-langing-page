import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<div className={styles.globalFooter}>
			<div className={styles.searchBoxLeft}>
				<h2>Medex</h2>
				<p className={styles.smallText}>What are you looking for?</p>
				<input
					type="text"
					name="search"
					placeholder="Search.."
					className={styles.inputSearch}
				/>
			</div>
			<div className={styles.learnInfo}>
				<h3>Learn</h3>
				<p className={styles.linksUnderline}>About us</p>
				<p className={styles.linksUnderline}>Our Experts</p>
				<p className={styles.linksUnderline}>How it works</p>
				<p className={styles.linksUnderline}>Purpose</p>
				<p className={styles.linksUnderline}>Investors</p>
				<p className={styles.linksUnderline}>Reviews</p>
			</div>
			<div className={styles.contactInfo}>
				<h3>Contact</h3>
				<p className={styles.linksUnderline}>Support</p>
				<p className={styles.linksUnderline}>contact@medex.com</p>
				<div className={styles.smallIcons}>
					<div className={styles.oneIcon}>
						<Image
							src="/icons/instagram.png"
							alt="Instagram"
							width={36}
							height={36}
							layout="fixed"
							className={styles.iconsImage}
						/>
					</div>
					<div className={styles.oneIcon}>
						<Image
							src="/icons/facebook.png"
							alt="Facebook"
							width={36}
							height={36}
							layout="fixed"
							className={styles.iconsImage}
						/>
					</div>
					<div className={styles.oneIcon}>
						<Image
							src="/icons/twitter.png"
							alt="Twitter"
							width={36}
							height={36}
							layout="fixed"
							className={styles.iconsImage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
