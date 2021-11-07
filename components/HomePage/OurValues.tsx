import React from "react";
import styles from "../../styles/OurValues.module.css";
import ImageFix from "../ImageFix/ImageFix";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const OurValues = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.globalOurValues}>
      <h2>Nasze wartości</h2>
      <div className={styles.subTitle}>
        W Medex wierzymy, że opieka zdrowotna powinna być dostępna dla
        każdego, zawsze i wszędzie.
      </div>

      <div className="pb-10">
        <Slider {...settings} className="">
          <div>
            <div className={styles.box}>
              <div className={styles.top}>
                <div className={styles.borderTopRight}>
                  <div className={styles.iconSize}>
                    <ImageFix
                      src="/images/patients.png"
                      alt="Pacjenci"
                    />
                  </div>
                  Pacjenci
                </div>
              </div>
              <div className={styles.bottom}>
                Pacjenci są dla nas na pierwszym miejscu. Pracujemy z
                myślą o potrzebach i problemach użytkownika, aby
                zaoferować wyjątkowe dowiadczenie w zakresie opieki
                zdrowotnej.
              </div>
            </div>
          </div>
          <div>
            <div className={styles.box}>
              <div className={styles.top}>
                <div className={styles.borderBottomLeft}>
                  <div className={styles.iconSize}>
                    <ImageFix
                      src="/images/clarity.png"
                      alt="Przejrzystosc"
                    />
                  </div>
                  Przejrzystość
                </div>
              </div>
              <div className={styles.bottom}>
                W Medex cały proces otrzymania opieki zdrowotnej jest
                spersonalizowany i przejrzysty, kupujesz leczenie w
                najbardziej wygodnej dla Ciebie ofercie cenowej.
              </div>
            </div>
          </div>
          <div>
            <div className={styles.box}>
              <div className={styles.borderTopLeft}>
                <div className={styles.top}>
                  <div className={styles.iconSize}>
                    <ImageFix
                      src="/images/modernity.png"
                      alt="Nowoczesność"
                    />
                  </div>
                  Nowoczesność
                </div>
              </div>
              <div className={styles.bottom}>
                Za pomocą smartfona możesz profesjonalnie i kompleksowo
                leczyć się bez konieczności wychodzenia z domu, co
                pozwala skupić się na zdrowiu, zawsze wtedy kiedy tego
                potrzebujesz.
              </div>
            </div>
          </div>
        </Slider>

      </div>

    </div>
  );
}
