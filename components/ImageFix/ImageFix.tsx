import styles from "./ImageFix.module.css";
import Image from "next/image";
import React from "react";

type propsType = {
	src: string;
	alt: string;
};

export default function ImageFix(props: propsType) {
	return (
		<div className={styles.imageContainer}>
			<Image
				src={props.src}
				alt={props.alt}
				layout="fill"
				className={styles.image}
			/>
		</div>
	);
}
