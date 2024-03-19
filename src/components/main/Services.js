import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Rodal from "rodal";

export default function Services() {
  const [t, i18n] = useTranslation("global");
  const [openModal, setOpenModal] = useState(false);
  const [modalHeadtitle, setModalHeadtitle] = useState(" ");
  const [modalSubtitle, setModalSubtitle] = useState(" ");
  const [state, handleSubmit] = useForm("xvojdlyy");

  function taost() {
    if (state.succeeded) {
      toast.success("Sizning arizangiz yuborildi", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setOpenModal(false);
    }
  }

  function service(headtitle, subtitle) {
    setOpenModal(true);
    setModalHeadtitle(headtitle);
    setModalSubtitle(subtitle);
  }

  useEffect(() => taost(), [state.succeeded]);

  return (
    <section id="services">
      <div className="container" data-aos="fade-up">
        <div className="title">
          <h2>{t("service.headtitle")}</h2>
        </div>
        <div className="cards">
          <div
            className="card"
            data-aos="flip-right"
            onClick={() => service("Web-sites", t("service.web"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="414"
              height="185"
              viewBox="0 0 414 185"
              fill="none"
              className="background"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47716 0 10C0 16.1969 5.59568 21.4343 9.25211 26.4375C11.387 29.3588 12.6883 33.2403 12.6883 37.5C12.6883 43.0991 10.44 48.0448 7.00554 51.0152C3.73036 53.8479 0 57.3364 0 61.6667V175C0 180.523 4.47716 185 10 185H404C409.523 185 414 180.523 414 175V10C414 4.47715 409.523 0 404 0H10Z"
                fill="#252527"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              className="nur"
            >
              <g filter="url(#filter0_dddddd_614_155)">
                <circle cx="52" cy="52" r="6" fill="#27E1C1" />
              </g>
              <defs>
                <filter
                  id="filter0_dddddd_614_155"
                  x="0.639999"
                  y="0.639999"
                  width="102.72"
                  height="102.72"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.54" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.08" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_614_155"
                    result="effect2_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.78" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_614_155"
                    result="effect3_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.56" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_614_155"
                    result="effect4_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="12.96" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_614_155"
                    result="effect5_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="22.68" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_614_155"
                    result="effect6_dropShadow_614_155"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_614_155"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Web-sites</h3>
            <p>{t("service.web")}</p>
          </div>
          <div
            className="card"
            data-aos="flip-right"
            onClick={() => service("UI&UX Design", t("service.uiux"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="414"
              height="185"
              viewBox="0 0 414 185"
              fill="none"
              className="background"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47716 0 10C0 16.1969 5.59568 21.4343 9.25211 26.4375C11.387 29.3588 12.6883 33.2403 12.6883 37.5C12.6883 43.0991 10.44 48.0448 7.00554 51.0152C3.73036 53.8479 0 57.3364 0 61.6667V175C0 180.523 4.47716 185 10 185H404C409.523 185 414 180.523 414 175V10C414 4.47715 409.523 0 404 0H10Z"
                fill="#252527"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              className="nur"
            >
              <g filter="url(#filter0_dddddd_614_155)">
                <circle cx="52" cy="52" r="6" fill="#27E1C1" />
              </g>
              <defs>
                <filter
                  id="filter0_dddddd_614_155"
                  x="0.639999"
                  y="0.639999"
                  width="102.72"
                  height="102.72"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.54" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.08" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_614_155"
                    result="effect2_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.78" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_614_155"
                    result="effect3_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.56" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_614_155"
                    result="effect4_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="12.96" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_614_155"
                    result="effect5_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="22.68" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_614_155"
                    result="effect6_dropShadow_614_155"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_614_155"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>UI&UX Design</h3>
            <p>{t("service.uiux")}</p>
          </div>
          <div
            className="card"
            data-aos="flip-right"
            onClick={() => service("CRM systems", t("service.crm"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="414"
              height="185"
              viewBox="0 0 414 185"
              fill="none"
              className="background"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47716 0 10C0 16.1969 5.59568 21.4343 9.25211 26.4375C11.387 29.3588 12.6883 33.2403 12.6883 37.5C12.6883 43.0991 10.44 48.0448 7.00554 51.0152C3.73036 53.8479 0 57.3364 0 61.6667V175C0 180.523 4.47716 185 10 185H404C409.523 185 414 180.523 414 175V10C414 4.47715 409.523 0 404 0H10Z"
                fill="#252527"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              className="nur"
            >
              <g filter="url(#filter0_dddddd_614_155)">
                <circle cx="52" cy="52" r="6" fill="#27E1C1" />
              </g>
              <defs>
                <filter
                  id="filter0_dddddd_614_155"
                  x="0.639999"
                  y="0.639999"
                  width="102.72"
                  height="102.72"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.54" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.08" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_614_155"
                    result="effect2_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.78" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_614_155"
                    result="effect3_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.56" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_614_155"
                    result="effect4_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="12.96" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_614_155"
                    result="effect5_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="22.68" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_614_155"
                    result="effect6_dropShadow_614_155"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_614_155"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>CRM systems</h3>
            <p>{t("service.crm")}</p>
          </div>
          <div
            className="card"
            data-aos="flip-right"
            onClick={() => service("Content Maker", t("service.mobile"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="414"
              height="185"
              viewBox="0 0 414 185"
              fill="none"
              className="background"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47716 0 10C0 16.1969 5.59568 21.4343 9.25211 26.4375C11.387 29.3588 12.6883 33.2403 12.6883 37.5C12.6883 43.0991 10.44 48.0448 7.00554 51.0152C3.73036 53.8479 0 57.3364 0 61.6667V175C0 180.523 4.47716 185 10 185H404C409.523 185 414 180.523 414 175V10C414 4.47715 409.523 0 404 0H10Z"
                fill="#252527"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              className="nur"
            >
              <g filter="url(#filter0_dddddd_614_155)">
                <circle cx="52" cy="52" r="6" fill="#27E1C1" />
              </g>
              <defs>
                <filter
                  id="filter0_dddddd_614_155"
                  x="0.639999"
                  y="0.639999"
                  width="102.72"
                  height="102.72"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.54" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.08" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_614_155"
                    result="effect2_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.78" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_614_155"
                    result="effect3_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.56" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_614_155"
                    result="effect4_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="12.96" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_614_155"
                    result="effect5_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="22.68" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_614_155"
                    result="effect6_dropShadow_614_155"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_614_155"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Content Maker</h3>
            <p>{t("service.mobile")}</p>
          </div>
          <div
            className="card"
            data-aos="flip-right"
            onClick={() => service("Logo & Brending", t("service.logo"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="414"
              height="185"
              viewBox="0 0 414 185"
              fill="none"
              className="background"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47716 0 10C0 16.1969 5.59568 21.4343 9.25211 26.4375C11.387 29.3588 12.6883 33.2403 12.6883 37.5C12.6883 43.0991 10.44 48.0448 7.00554 51.0152C3.73036 53.8479 0 57.3364 0 61.6667V175C0 180.523 4.47716 185 10 185H404C409.523 185 414 180.523 414 175V10C414 4.47715 409.523 0 404 0H10Z"
                fill="#252527"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              className="nur"
            >
              <g filter="url(#filter0_dddddd_614_155)">
                <circle cx="52" cy="52" r="6" fill="#27E1C1" />
              </g>
              <defs>
                <filter
                  id="filter0_dddddd_614_155"
                  x="0.639999"
                  y="0.639999"
                  width="102.72"
                  height="102.72"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.54" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.08" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_614_155"
                    result="effect2_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.78" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_614_155"
                    result="effect3_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.56" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_614_155"
                    result="effect4_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="12.96" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_614_155"
                    result="effect5_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="22.68" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_614_155"
                    result="effect6_dropShadow_614_155"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_614_155"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Logo & Brending</h3>
            <p>{t("service.logo")}</p>
          </div>
          <div
            className="card"
            data-aos="flip-right"
            onClick={() => service("Mobilografiya", t("service.media"))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="414"
              height="185"
              viewBox="0 0 414 185"
              fill="none"
              className="background"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47716 0 10C0 16.1969 5.59568 21.4343 9.25211 26.4375C11.387 29.3588 12.6883 33.2403 12.6883 37.5C12.6883 43.0991 10.44 48.0448 7.00554 51.0152C3.73036 53.8479 0 57.3364 0 61.6667V175C0 180.523 4.47716 185 10 185H404C409.523 185 414 180.523 414 175V10C414 4.47715 409.523 0 404 0H10Z"
                fill="#252527"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              className="nur"
            >
              <g filter="url(#filter0_dddddd_614_155)">
                <circle cx="52" cy="52" r="6" fill="#27E1C1" />
              </g>
              <defs>
                <filter
                  id="filter0_dddddd_614_155"
                  x="0.639999"
                  y="0.639999"
                  width="102.72"
                  height="102.72"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.54" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.08" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_614_155"
                    result="effect2_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.78" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_614_155"
                    result="effect3_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.56" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_614_155"
                    result="effect4_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="12.96" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_614_155"
                    result="effect5_dropShadow_614_155"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="22.68" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_614_155"
                    result="effect6_dropShadow_614_155"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_614_155"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Mobilografiya</h3>
            <p>{t("service.media")}</p>
          </div>
        </div>
      </div>
      <Rodal visible={openModal} onClose={() => setOpenModal(false)}>
        <h2>{modalHeadtitle}</h2>
        <p>{modalSubtitle}</p>
        <form className="content" onSubmit={handleSubmit}>
          <div className="left">
            <div className="form">
              <input
                type="text"
                id="company"
                name="Kompaniya nomi"
                autoComplete="off"
                required
              />
              <label htmlFor="company">{t("service.send.company")}</label>
            </div>
            <div className="form">
              <input
                type="text"
                id="fish"
                name="Ism Sharifi"
                autoComplete="off"
                required
              />
              <label htmlFor="fish">{t("service.send.name")}</label>
            </div>
            <div className="form">
              <input
                type="number"
                id="phone"
                name="Telefon raqami"
                autoComplete="off"
                required
              />
              <label htmlFor="phone">{t("service.send.phone")}</label>
            </div>
            <div className="form">
              <input
                type="text"
                id="typee"
                name="Xizmat turi"
                value={modalHeadtitle}
                autoComplete="off"
                required
              />
              <label htmlFor="typee">{t("service.send.type")}</label>
            </div>
          </div>
          <div className="right">
            <h4>{t("service.send.project")}</h4>
            <textarea
              name="Message"
              placeholder={t("service.send.enter")}
            ></textarea>
            <button type="submit" disabled={state.submitting}>
              {t("service.send.sending")}
            </button>
          </div>
        </form>
      </Rodal>
    </section>
  );
}
