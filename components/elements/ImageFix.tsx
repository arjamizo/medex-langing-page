import styles from "./ImageFix.module.css";
import Image from "next/image";
import React from "react";

export default function ImageFix(props: object) {
	return (
		<div className={styles.imageContainer}>
			<Image
				src="/images/ladyDoctor.png"
				alt=""
				layout="fill"
				className={styles.image}
			/>
		</div>
	);
}
