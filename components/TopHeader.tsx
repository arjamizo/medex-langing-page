import React from "react";
import styles from "../styles/TopHeader.module.css";
import { Link as ReactScrollLink } from "react-scroll";
import Image from "next/image";

export default function TopHeader() {
	return (
		<div className={styles.globalTopHeader}>
			<div className={styles.medexLogo}>Medex</div>
			<div className={styles.topRight}>
				<span className={styles.buttonFaq}>
					<ReactScrollLink
						activeClass="active"
						to="faq"
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
			<div className={styles.gridContainer}>
				<span className={styles.freeMedicalAdvice}>
					<span className={styles.paddingIcon}>
						<Image
							src="/../public/icons/iconFreeMedical.png"
							alt="Free Medical Advice"
							width={30}
							height={30}
							layout="fixed"
						/>
					</span>
					Free medical advice
				</span>
				<span className={styles.licensedProfessionals}>
					<span className={styles.paddingIcon}>
						<Image
							src="/../public/icons/iconLicensedProfessionals.png"
							alt="Free Medical Advice"
							width={30}
							height={30}
							layout="fixed"
						/>
					</span>
					Licensed professionals
				</span>
				<span className={styles.personalizedTreatment}>
					<span className={styles.paddingIcon}>
						<Image
							src="/../public/icons/iconPersonalizedTreatment.png"
							alt="Free Medical Advice"
							width={25}
							height={18.75}
							layout="fixed"
						/>
					</span>
					Personalized treatment plans
				</span>
				<span className={styles.shippingWithin}>
					<span className={styles.paddingIcon}>
						<Image
							src="/../public/icons/iconShippingWithin24.png"
							alt="Free Medical Advice"
							width={30}
							height={30}
							layout="fixed"
						/>
					</span>
					Shipping within 24 hours
				</span>
				<div className={styles.imageLady}>
					<Image
						src="/../public/images/ladyMail.png"
						alt="Free Medical Advice"
						width={562}
						height={285}
					/>
				</div>
				<div className={styles.getCareButton}>Get Care</div>
			</div>
		</div>
	);
}
