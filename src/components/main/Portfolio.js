import React from "react";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="title" data-aos="fade-up">
          <div className="start">
            <h2>{t("portfolio.headtitle")}</h2>
            <div className="subtitle">
              <div className="line"></div>
              <p>{t("portfolio.subtitle")}</p>
              <div className="line two"></div>
            </div>
          </div>
          <div className="end">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="12"
                viewBox="0 0 31 12"
                fill="none"
              >
                <path
                  d="M0.469669 5.46967C0.176777 5.76257 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989595 6.3033 0.696701C6.01041 0.403808 5.53553 0.403808 5.24264 0.696701L0.469669 5.46967ZM31 5.25L1 5.25L1 6.75L31 6.75L31 5.25Z"
                  fill="#27E1C1"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="12"
                viewBox="0 0 31 12"
                fill="none"
              >
                <path
                  d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75L30 6.75L30 5.25L0 5.25L0 6.75Z"
                  fill="#27E1C1"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="cards">
          <div className="cardWrapper">
            <div className="card" data-aos="fade-up">
              <div className="wrapper">
                <div className="title">
                  <span>For Mediatech</span>
                  <p>Post design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardWrapper">
            <div className="card" data-aos="fade-up">
              <div className="wrapper">
                <div className="title">
                  <span>For Rayhon restaurant</span>
                  <p>Menu design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardWrapper">
            <div className="card" data-aos="fade-up">
              <div className="wrapper">
                <div className="title">
                  <span>For Technoshop</span>
                  <p>SMD post</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardWrapper">
            <div className="card" data-aos="fade-up">
              <div className="wrapper">
                <div className="title">
                  <span>Alifeducation</span>
                  <p>Website Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
