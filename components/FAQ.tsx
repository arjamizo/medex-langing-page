import React from "react";
import styles from "../styles/FAQ.module.css";
import Image from "next/image";

function CloseIcon(props: any) {
	return (
		<div>
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
		</div>
	);
}

export default function FAQ() {
	return (
		<div className={styles.globalFaq} id="faq">
			<h2>Frequently Asked Questions</h2>
			<div className={styles.faqArray}>
				<div className={styles.faqBox}>
					<CloseIcon />
					<h3>
						How long does it take to hear back from a medical
						doctor?
					</h3>
					<h4>
						You should hear back from a healthcare provider on the
						Medex platform in a few minutes after request. If your
						request was sent at night, then the response time may
						increase to serval hours of waiting
					</h4>
				</div>

				<div className={styles.faqBox}>
					<CloseIcon />
					<h3>Who is Medex for?</h3>
					<h4>
						Medex is a digital health service that provides
						telemedicine and telepharmacy for adults to treat their
						health problems quickly and effectively at any time and
						any place.
					</h4>
				</div>

				<div className={styles.faqBox}>
					<CloseIcon />
					<h3>Who is the health care professionals in Medex?</h3>
					<h4>
						All of the healthcare team on the Medex platform are
						licensed healthcare professionals. Each doctor
						undergoeas an extensive background check and license
						verification process. When you message or talk with a
						physican on the Medex platform you can see their resume
						and medical license.
					</h4>
				</div>

				<div className={styles.faqBox}>
					<CloseIcon />
					<h3>Can I use any pharmacy?</h3>
					<h4>
						Yes, you can just choose the address of your local
						pharmacy and medications will be shipped there for free.
					</h4>
				</div>

				<div className={styles.faqBox}>
					<CloseIcon />
					<h3>Can I purchase medications with home delivery?</h3>
					<h4>
						<b>OTC</b> medications: <b> Yes</b>,<br />
						<b>Rx</b> medications: <b>No</b>, <br />
						The current position of the Chief Pharmaceutical
						Inspector is identical to the act and is clear -
						internet - order sale of prescription drugs is
						impossible. Pharmaceutical law regulations in force in
						Poland do not allow this.
					</h4>
				</div>

				<div className={styles.faqBox}>
					<CloseIcon />
					<h3>Is my personal data safe?</h3>
					<h4>
						Yes. We take your privacy and the security of your
						information very seriously. Please read our Privacy
						Policy for more details.{" "}
					</h4>
				</div>
			</div>
		</div>
	);
}
