import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import {useForm} from "react-hook-form";

export default function Footer() {
  // icons
  const iconsArray = [
    {path: "/icons/instagram.png", alt: "Instagram"},
    {path: "/icons/facebook.png", alt: "Facebook"},
    {path: "/icons/twitter.png", alt: "Twitter"},
  ];
  const iconSize = 36; // px

  // search input box
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data: object) => console.log("footer, searchBox:", data);

  return (
    <div className={styles.globalFooter}>
      <div className={styles.searchBoxLeft}>
        <h2>Medex</h2>
        <p className={styles.smallText}>What are you looking for?</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className={styles.inputSearch}
            {...register("search")}
            required
          />
          <input
            type="submit"
            value=" "
            className={styles.inputSubmit}
          />
        </form>
      </div>
      <div className={styles.learnInfo}>
        <h3>Learn</h3>
        <ul>
          <li className={styles.linksUnderline}>About us</li>
          <li className={styles.linksUnderline}>Our Experts</li>
          <li className={styles.linksUnderline}>How it works</li>
          <li className={styles.linksUnderline}>Purpose</li>
          <li className={styles.linksUnderline}>Investors</li>
          <li className={styles.linksUnderline}>Reviews</li>
        </ul>
      </div>
      <div className={styles.contactInfo}>
        <h3>Contact</h3>
        <ul>
          <li className={styles.linksUnderline}>Support</li>
          <li className={styles.linksUnderline}>contact@medex.com</li>
        </ul>
        <div className={styles.smallIcons}>
          {iconsArray.map((e) => {
            return (
              <div className={styles.oneIcon} key={e.alt}>
                <Image
                  src={e.path}
                  alt={e.alt}
                  width={iconSize}
                  height={iconSize}
                  layout="fixed"
                  className={styles.iconsImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
