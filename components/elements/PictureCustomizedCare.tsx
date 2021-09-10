import React from "react";
import styles from "../../styles/PictureCustomizedCare.module.css";

export default function PictureCustomizedCare(props: any) {
	return (
		<>
			<div className={styles.pictureBox}>
				<div className={styles.picture}>{props.picture}</div>
				<div className={styles.description}>{props.description}</div>
			</div>
		</>
	);
}
