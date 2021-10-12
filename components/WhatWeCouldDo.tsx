import React from "react";
import styles from "../styles/WhatWeCouldDo.module.css";
import ImageFix from "./elements/ImageFix";

export default function WhatWeCouldDo() {
  return (
    <div className={styles.backgroundSquare}>
      <div className={styles.globalWhatWeCouldDo}>
        <div className={styles.top}>
          <div className={styles.flexTop}>
            <h3>Odkryj co Medex może zrobić dla Twojej firmy.</h3>
            <div className={styles.buttonGreen}>Zaczynajmy</div>
          </div>
          <div className={styles.flex}>
            {/* TODO: this should be map */}
            <div className={styles.row}>
              <div className={styles.pictureStyle}>
                <ImageFix
                  src="/images/health.png"
                  alt="Zdrowie"
                />
              </div>
              <div className={styles.column}>
                <div className={styles.title}>Zdrowie</div>
                <div className={styles.description}>
                  Współpracujemy z licencjonowanymi aptekami i
                  producentami leków oraz z lekarzami różnych
                  specjalizacji dostarczając wieloletnie
                  doświadczenia w prosty i spersonalizowany
                  sposoby.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.title}>
                  “direct-to-patient”
                </div>
                <div className={styles.description}>
                  Nasi pacjenci mają dostęp do bazy różnego
                  rodzaju leków, które mogą zakupić wraz z
                  dyskretną dostawą, a stały kontakt z
                  pacjentem pozwala śledzić przestrzeganie
                  przepisanych terapii.
                </div>
              </div>
              <div className={styles.pictureStyle}>
                <ImageFix
                  src="/images/direct-to-patient.png"
                  alt="Direct to patient"
                />
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.row}>
              <div className={styles.pictureStyle}>
                <ImageFix
                  src="/images/apiPicture.png"
                  alt="Zdrowie"
                />
              </div>
              <div className={styles.column}>
                <div className={styles.title}>API</div>
                <div className={styles.description}>
                  Zaawansowane technologia, API i podejście
                  oparte na długotrwałej współpracy zapewniają
                  unikatową oszczędności czasowo-finansową i
                  poprawiają zdrowie jak również wyniki
                  leczenia Naszych pacjentów.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
