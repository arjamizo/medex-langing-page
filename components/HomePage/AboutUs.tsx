import React from "react";
import styles from "../../styles/AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.globalAboutUs} id={"aboutUs"}>
      <h2>O nas</h2>
      <div className={styles.subTitle}>
        Medex jest firmą technologiczną, która buduje zaawansowany
        system opieki zdrowotnej łącząc wstepne diagnozowanie, usługi
        farmaceutyczne oraz stały kontakt z lekarzem aby zapewnić
        wysokej jakości i przystepną cenowo opiekę medyczną.
      </div>
      <div className={styles.subTitle}>
        Zespół Medex tworzą specjaliści z dziedziny medycyny,
        technologii, biznesu i prawa, każdego dnia decydując, jak
        sprawić, by medycyna była bardziej dostępna i skuteczna dla
        wszystkich.
      </div>
    </div>
  );
}
