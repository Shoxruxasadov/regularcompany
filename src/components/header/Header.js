import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import regularcompany from "../../image/regularcompany.png";

export default function Header() {
  const [lang, setLang] = useState(false);
  const [rodal, setRodal] = useState(false);
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");
  const langar = ["uz", "ru", "en"];
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  useEffect(() => {
    if (!language) localStorage.setItem("lang", "uz");
    handleChangeLanguage(language);
  }, [lang]);

  return (
    <header>
      <div className="container" data-aos="fade-down">
        <Link
          className="logo"
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <img src={regularcompany} alt=" " />
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.about")}
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.service")}
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.portfolio")}
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.contact")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="marketing">
          <a href="tel:998555003663">+998 55 500 3663</a>
          <div className="lang">
            <p
              className={language == "uz" ? "active" : ""}
              onClick={() => {
                localStorage.setItem("lang", "uz");
                setLang(!lang);
              }}
            >
              uz
            </p>
            <div className="line"></div>
            <p
              className={language == "ru" ? "active" : ""}
              onClick={() => {
                localStorage.setItem("lang", "ru");
                setLang(!lang);
              }}
            >
              ru
            </p>
            <div className="line"></div>
            <p
              className={language == "en" ? "active" : ""}
              onClick={() => {
                localStorage.setItem("lang", "en");
                setLang(!lang);
              }}
            >
              en
            </p>
          </div>
        </div>
      </div>

      <div className="mobilenav" data-aos="fade-down">
        <div className="menu">
          <div
            onClick={() =>
              document.querySelector(".menu").classList.toggle("active")
            }
            className="toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="switch">
            <div className="wrap"></div>

            <div className="list">
              <Link
                className="logo"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.about")}
              </Link>
              <Link
                className="logo"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.service")}
              </Link>
              <Link
                className="logo"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.portfolio")}
              </Link>
              <Link
                className="logo"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.contact")}
              </Link>
            </div>
          </div>
        </div>

        <div
          className="language"
          onClick={() =>
            document.querySelector(".language").classList.toggle("active")
          }
        >
          <div className="lang">
            <p>{language}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path d="M11 7L6 2L1 7" stroke="#D5D5D5" stroke-width="1.5" />
            </svg>
          </div>
          <div className="selector">
            {langar.map(
              (item, index) =>
                item !== language && (
                  <p
                    key={index}
                    onClick={() => {
                      localStorage.setItem("lang", langar[index]);
                      setLang(!lang);
                    }}
                  >
                    {langar[index]}
                  </p>
                )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
