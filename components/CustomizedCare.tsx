import React from "react";
import styles from "../styles/CustomizedCare.module.css";
import PictureCustomizedCare from "./elements/PictureCustomizedCare";

export default function CustomizedCare() {
	return (
		<div className={styles.globalCustomizedCare}>
			<h2>Get customized care</h2>
			<div className={styles.picturesArray}>
				<PictureCustomizedCare />
				<PictureCustomizedCare />
				<PictureCustomizedCare />
				<PictureCustomizedCare />
				<PictureCustomizedCare />
			</div>
			<button className={styles.moreButton}>More</button>
		</div>
	);
}
