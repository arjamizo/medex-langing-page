import React from "react";
import styles from "../../styles/FaqOneQuestion.module.css";

export default function FaqOneQuestion(props: any) {
	return (
		<div className={styles.faqBox}>
			<h3>{props.question}</h3>
			<h4>{props.answer}</h4>
		</div>
	);
}
