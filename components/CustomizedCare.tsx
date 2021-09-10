import React from "react";
import styles from "../styles/CustomizedCare.module.css";
import PictureCustomizedCare from "./elements/PictureCustomizedCare";

export default function CustomizedCare() {
	return (
		<div className={styles.globalCustomizedCare}>
			<h2>Get customized care</h2>
			<div className={styles.picturesArray}>
				<PictureCustomizedCare
					picture={"pic"}
					description={"Daily Health"}
				/>
				<PictureCustomizedCare
					picture={"pic"}
					description={"Skin Care"}
				/>
				<PictureCustomizedCare
					picture={"pic"}
					description={"Sexual Health"}
				/>
				<PictureCustomizedCare
					picture={"pic"}
					description={"Supplements"}
				/>
			</div>
			<p className={styles.moreButton}>More</p>
		</div>
	);
}
