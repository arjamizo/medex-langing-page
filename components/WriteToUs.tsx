import React from "react";
import styles from "../styles/WriteToUs.module.css";
import { useForm } from "react-hook-form";

export default function WriteToUs() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: object) => console.log("Write to us:", data);

	return (
		<div className={styles.globalWriteToUs} id={"writeToUS"}>
			<div className={styles.flexContainer}>
				<div className={styles.leftSide}>
					<div className={styles.foldMaxWords}>
						<h2>Napisz do nas</h2>
						<div className={styles.subTitle}>
							Zostaw wiadomość, a my wkrótce skontaktujemy się z
							Tobą
						</div>
					</div>
				</div>

				{/* TODO: this should be map */}
				<div className={styles.rightSide}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.textAboveInput}>Mail</div>
						<input
							type="text"
							className={styles.inputBox}
							{...register("mail")}
							required
							placeholder={"Mail"}
						/>
						<div className={styles.textAboveInput}>
							Numer telefonu
						</div>
						<input
							type="number"
							className={styles.inputBox}
							{...register("phoneNumber")}
							required
							placeholder={"+48 XXX XXX XXX"}
						/>
						<div className={styles.textAboveInput}>Imię</div>
						<input
							type="text"
							className={styles.inputBox}
							{...register("name")}
							required
							placeholder={"Imię"}
						/>
						<div className={styles.textAboveInput}>Wiadomość</div>
						<textarea
							className={styles.inputBox}
							{...register("message")}
							required
							placeholder={"Wpisz wiadomość"}
							rows={4}
						/>
						<div className={styles.positionSubmit}>
							<input
								type="submit"
								value="Wyslij"
								className={styles.inputSubmit}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
