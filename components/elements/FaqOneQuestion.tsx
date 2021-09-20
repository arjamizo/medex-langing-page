import React from "react";
import styles from "../../styles/FaqOneQuestion.module.css";
import Image from "next/image";

export default function FaqOneQuestion(props: any) {
	return (
		<div className={styles.faqBox}>
			<span className={styles.closeIcon}>
				<Image
					src="/icons/faqClose.png"
					alt="Free Medical Advice"
					width={25}
					height={25}
					layout="fixed"
					className={styles.iconClass}
				/>
			</span>
			<h3>{props.question}</h3>
			<h4>{props.answer}</h4>
		</div>
	);
}
