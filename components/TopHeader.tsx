import React from "react";
import styles from "../styles/TopHeader.module.css";
import { Link as ReactScrollLink } from "react-scroll";

export default function TopHeader() {
	return (
		<div className={styles.globalTopHeader}>
			<div className={styles.medexLogo}>Medex</div>
			<div className={styles.topRight}>
				<span className={styles.buttonFaq}>
					<ReactScrollLink
						activeClass="active"
						to="faq"
						spy={true}
						smooth={true}
						duration={1000}
					>
						FAQ
					</ReactScrollLink>
				</span>
				<span className={styles.buttonPlans}>
					<ReactScrollLink
						activeClass="active"
						to="plans"
						spy={true}
						smooth={true}
						duration={1000}
					>
						Plans
					</ReactScrollLink>
				</span>
				<span className={styles.buttonTryIt}>Try it for free</span>
				<span className={styles.buttonLogIn}>Log in</span>
			</div>
			<h1 className={styles.title}>
				Treatment, when &amp; where You need it
			</h1>
			<div className={styles.logos}>
				<span>Free medical advice</span>
				<span>Licensed professionals</span>
				<span>Personalized treatment plans</span>
				<span>Shipping within 24 hours</span>
			</div>
			<div className={styles.oldLadyPicture}>**IMAGE OLD LADY**</div>
			<div className={styles.getCareButton}>Get Care</div>
		</div>
	);
}
