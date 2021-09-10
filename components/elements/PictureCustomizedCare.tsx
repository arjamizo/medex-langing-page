import React from "react";
import styles from "../../styles/PictureCustomizedCare.module.css";

export default function PictureCustomizedCare() {
	return (
		<div className={styles.pictureBox}>
			<div className={styles.picture}>Picture</div>
			<div className={styles.description}>Description</div>
		</div>
	);
}
