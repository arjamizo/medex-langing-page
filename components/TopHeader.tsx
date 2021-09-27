import React from "react";
import styles from "../styles/TopHeader.module.css";
import { Link as ReactScrollLink } from "react-scroll";
import ImageFix from "./elements/ImageFix";

export default function TopHeader() {
	const durationScroll = 500;
	return (
		<div className={styles.globalTopHeader}>
			<div className={styles.topRow}>
				<h1 className={styles.medexLogo}>Medex</h1>
				<div className={styles.topRightButtons}>
					<span className={styles.buttonTop}>Współpraca</span>
					<span className={styles.buttonTop}>
						<ReactScrollLink
							activeClass="active"
							to="faq"
							smooth={true}
							duration={durationScroll}
						>
							FAQ
						</ReactScrollLink>
					</span>
					<span className={styles.buttonContact}>
						<ReactScrollLink
							activeClass="active"
							to="writeToUS"
							smooth={true}
							duration={durationScroll}
						>
							Kontakt
						</ReactScrollLink>
					</span>
					<span className={styles.buttonTop}>
						<ReactScrollLink
							activeClass="active"
							to="aboutUs"
							smooth={true}
							duration={durationScroll}
						>
							O nas
						</ReactScrollLink>
					</span>
				</div>
			</div>
			<div className={styles.flexContainer}>
				<div className={styles.leftSide}>
					<h2 className={styles.title}>
						Opieka medyczna bez wychodzenia z domu
					</h2>
					<div className={styles.description}>
						Sprawdż jak możesz zaoszczędzić czas i pieniędzy na
						leczeniu którego potrzebujesz bez konieczności
						wychodzenia z domu i ukrytych opłat
					</div>
					<div className={styles.getCareButton}>
						Dowiedz się więcej
					</div>
				</div>
				<div className={styles.imagePosition}>
					<ImageFix src="/images/ladyDoctor.png" alt="Lady Doctor" />
				</div>
			</div>
		</div>
	);
}
