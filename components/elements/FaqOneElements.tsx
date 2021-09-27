import React from "react";
import Image from "next/image";
import styles from "../../styles/FAQ.module.css";

type faqProps = {
	title: string;
	description: string;
};

export default function FaqOneElement(props: faqProps) {
	function CloseIcon(props: any) {
		return (
			<div>
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
			</div>
		);
	}
	return (
		<div className={styles.faqBox}>
			<CloseIcon />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	);
}
