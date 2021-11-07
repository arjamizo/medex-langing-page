import React from "react";
import styles from "../../../styles/ReachOurPatients.module.css";
import ImageFix from "../../ImageFix/ImageFix";
import {AllDiseasesSVG} from "./AllDiseasesSVG";
import {BackgroundCircleSVG} from "./BackgroundCircleSVG";
import {ChatSVG} from "./ChatSVG";


export default function ReachOurPatients() {
  return (
    <div className="">
      <div className={styles.globalReachOurPatients}>
        <h2>Docieramy bezpośrednio do swoich pacjentów</h2>
        <br/>
        <div className="z-0 relative">
          <p
            className="absolute inset-0 flex items-center translate-x-10 justify-center text-3xl text-center text-white">
            Specjalistyczne leczenia
            <br/>
            Dostawa na wskazany adres
            <br/>
            Stały kontakt z zespołem lekarzy.
          </p>
          <span className="absolute left-40 top-10">
            <AllDiseasesSVG/>
          </span>
          <span className="flex justify-center items-center z-0">
            <BackgroundCircleSVG />
          </span>
          <span className="absolute bottom-1 left-32 z-10">
            <ChatSVG />
          </span>
          <span className="w-72 absolute right-10 bottom-0">
            <ImageFix
              src={"/images/weReachOurPatientsWorker.png"}
              alt={"How we work"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
