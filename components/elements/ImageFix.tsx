import styles from "./ImageFix.module.css";
import Image from "next/image";
import React from "react";

type ImageFix = {
	width: object;
	maxWidth: string;
};

export default function ImageFix(props: ImageFix) {
	return (
		<div className={styles.imageContainer} style={props.width}>
			<Image
				src="/images/ladyDoctor.png"
				alt=""
				layout="fill"
				className={styles.image}
			/>
		</div>
	);
}
