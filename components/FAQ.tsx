import React from "react";
import styles from "../styles/FAQ.module.css";
import Image from "next/image";

function FaqOneQuestion(props: any) {
	return (
		<div className={styles.faqBox}>
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
			<h3>{props.question}</h3>
			<h4>{props.answer}</h4>
		</div>
	);
}

export default function FAQ() {
	return (
		<div className={styles.globalFaq} id="faq">
			<h2>Frequently Asked Questions</h2>
			<div className={styles.faqArray}>
				<FaqOneQuestion
					question={
						"How long does it take to hear back from a medical doctor?"
					}
					answer={
						"You should hear back from a healthcare provider on the Medex platform in a few minutes after request. If your request was sent at night, then the response time may increase to serval hours of waiting"
					}
				/>
				<FaqOneQuestion
					question={"Who is Medex for?"}
					answer={
						"Medex is a digital health service that provides telemedicine and telepharmacy for adults to treat their health problems quickly and effectively at any time and any place."
					}
				/>
				<FaqOneQuestion
					question={"Who is the health care professionals in Medex?"}
					answer={
						"All of the healthcare team on the Medex platform are licensed healthcare professionals. Each doctor undergoeas an extensive background check and license verification process. When you message or talk with a physican on the Medex platform you can see their resume and medical license."
					}
				/>
				<FaqOneQuestion
					question={"Can I use any pharmacy?"}
					answer={
						"Yes, you can just choose the address of your local pharmacy and medications will be shipped there for free."
					}
				/>
				<FaqOneQuestion
					question={"Can I purchase medications with home delivery?"}
					answer={
						"OTC medications: <b> Yes</b>, Rx medications: No, The current position of the Chief Pharmaceutical Inspector is identical to the act and is clear - internet - order sale of prescription drugs is impossible. Pharmaceutical law regulations in force in Poland do not allow this."
					}
				/>
				<FaqOneQuestion
					question={"Is my personal data safe?"}
					answer={
						"Yes. We take your privacy and the security of your information very seriously. Please read our Privacy Policy for more details. "
					}
				/>
			</div>
		</div>
	);
}
