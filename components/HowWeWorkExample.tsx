import React from "react";
import styles from "../styles/HowWeWorkExample.module.css";

export default function HowWeWorkExample() {
	return (
		<div className={styles.globalHowWeWorkExample}>
			<div className={styles.topLeft}>
				<h2>Find out how we can help you with your health issues.</h2>
				<h3>
					At medex, we belive that healthcare should be avalible to
					everyone, anytime, anywhere. Using your smartphone, you can
					be treated without leaving your home or work. Diagnostics
					and medicines are delivered directly to your specified
					address.
				</h3>
				<p className={styles.smallText}>
					If there is an emergency and you are experiencing severe
					symptoms or bleeding, please call 911 or seek in person care
					immediately.
				</p>
			</div>
			<div className={styles.pictureLeft}>picture left</div>
			<div className={styles.secondText}>
				<h2>Free online visit</h2>
				<h3>
					Search for health issue of the interest and answer the
					medical questions. The licensed Doctor provide you with
					Therapy plan which you will able to purchase to the
					doorstep.
				</h3>
			</div>
			<div className={styles.thirdText}>
				<h2>Delivery of treatment</h2>
				<h3>
					Our doctors will contact you via live chat and tell you
					about the treatment options that you can purchase to the
					desired address.
				</h3>
			</div>
			<div className={styles.pictureRight}>picture right</div>
			<div className={styles.bottomText}>
				<h2>Ongoing care</h2>
				<h3>
					Unlimited follow-up care to discuss treatment progress or
					diagnostic results with our healthcare team.
				</h3>
				<p>
					<b>For Membership only!</b>
				</p>
			</div>
		</div>
	);
}
