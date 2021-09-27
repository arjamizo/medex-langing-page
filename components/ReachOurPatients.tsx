import React from "react";
import styles from "../styles/ReachOurPatients.module.css";
import ImageFix from "./elements/ImageFix";

export default function ReachOurPatients() {
	return (
		<div className={styles.globalReachOurPatients}>
			<h2>Docieramy bezpośrednio do swoich pacjentów</h2>
			<ImageFix
				src="/images/circleOurPatients.png"
				alt="Placeholder Our patients"
			/>
		</div>
	);
}
