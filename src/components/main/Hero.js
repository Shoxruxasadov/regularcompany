import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "../../style/loading.css";

export default function Hero() {
  const [openChat, setOpenChat] = useState(false);
  const [chatLoading, setChatLoading] = useState(true);
  const [chatValue, setChatValue] = useState("");
  const [chatArr, setChatsArr] = useState([]);
  const [t, i18n] = useTranslation("global");

  function enterPress(event) {
    if (event.key === "Enter") {
      pushChat();
    }
  }

  function pushChat() {
    if (chatValue !== "") {
      setChatsArr((prev) => [
        ...prev,
        {
          uid: Date.now(),
          avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          text: chatValue,
          type: "user",
        },
      ]);
    }
    setChatValue("");
  }

  useEffect(() => {
    if (chatArr.length != 0) {
      setChatLoading(false);
    }
  }, [chatArr]);

  useEffect(() => {
    if (openChat && chatArr[0] === undefined) {
      setTimeout(() => {
        setChatsArr((prev) => [
          ...prev,
          {
            uid: Date.now(),
            avatar: "https://cdn-icons-png.flaticon.com/512/6691/6691677.png",
            text: t("hero.chatText"),
            type: "administrator",
          },
        ]);
      }, 2000);
    }
  }, [openChat]);

  return (
    <section id="hero">
      <div className="container">
        <div className="title" data-aos="fade-right">
          <h1>{t("hero.headtitle")}</h1>
          <p>{t("hero.subtitle")}</p>
          <p>{t("hero.bodytitle")}</p>
          <Link
            className="logo"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            type="button"
          >
            {t("hero.contact")}
          </Link>
        </div>
        <div className="connection" onClick={() => setOpenChat(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <circle cx="6" cy="6" r="6" fill="#10EA25" />
          </svg>
          <span>{t("hero.chat")}</span>
        </div>
        <div className={`chat ${openChat ? "active" : ""}`}>
          <div className="header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#10EA25" />
            </svg>
            <p>{t("hero.chatTitle")}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="close"
              onClick={() => setOpenChat(false)}
            >
              <path
                d="M16.2882 14.9617C16.4644 15.1379 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2899C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2899L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5634 4.37419 16.5634C4.12511 16.5634 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3752 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.0383C3.53556 4.86218 3.43662 4.62331 3.43662 4.37423C3.43662 4.12516 3.53556 3.88629 3.71168 3.71017C3.88781 3.53405 4.12668 3.43511 4.37575 3.43511C4.62482 3.43511 4.86369 3.53405 5.03981 3.71017L9.99997 8.67189L14.9617 3.70939C15.1378 3.53327 15.3767 3.43433 15.6257 3.43433C15.8748 3.43433 16.1137 3.53327 16.2898 3.70939C16.4659 3.88551 16.5649 4.12438 16.5649 4.37345C16.5649 4.62252 16.4659 4.86139 16.2898 5.03752L11.3281 10L16.2882 14.9617Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="main">
            <div className="wrapper">
              {chatArr.map((item, index) => (
                <div className={`chatText ${item.type}`} key={index}>
                  <img src={item.avatar} />
                  <div className="text">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div id="loading-bubble">
                  <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="footer">
            <input
              type="text"
              placeholder={t("hero.chatPlace")}
              onChange={(e) => setChatValue(e.target.value)}
              value={chatValue}
              onKeyPress={(event) => enterPress(event)}
            />
            <button onClick={pushChat}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M3.75 16.25H11.25V13.75H3.75V2.30749C3.75002 2.19889 3.77834 2.09216 3.83217 1.99783C3.886 1.9035 3.96348 1.82483 4.05697 1.76957C4.15047 1.7143 4.25675 1.68435 4.36534 1.68268C4.47394 1.681 4.58109 1.70765 4.67625 1.75999L27.7537 14.4525C27.8517 14.5064 27.9335 14.5857 27.9904 14.682C28.0473 14.7783 28.0773 14.8881 28.0773 15C28.0773 15.1119 28.0473 15.2217 27.9904 15.318C27.9335 15.4143 27.8517 15.4935 27.7537 15.5475L4.67625 28.2412C4.581 28.2936 4.47373 28.3203 4.36503 28.3186C4.25633 28.3168 4.14996 28.2868 4.05643 28.2313C3.9629 28.1759 3.88544 28.0971 3.8317 28.0026C3.77796 27.9081 3.7498 27.8012 3.75 27.6925V16.25Z"
                  fill="#00C800"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
