import React from "react";
import { ReactComponent as GitHub } from "../../assets/images/social/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/social/linkedin.svg";
import { ReactComponent as Telegram } from "../../assets/images/social/telegram.svg";
import { ReactComponent as Discord } from "../../assets/images/social/discord.svg";

const Social = () => {
  return (
    <div className="social">
      <div className="social__item">
        <a
          href="https://github.com/Alex-g-h"
          target="blank"
        >
          <GitHub className="social__svg-32px" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://discordapp.com/users/554033587289063427/"
          target="blank"
        >
          <Discord className="social__svg-32px" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://www.linkedin.com/in/aleksey-bulygin/"
          target="blank"
        >
          <LinkedIn className="social__svg-32px" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://t.me/bulalex"
          target="blank"
        >
          <Telegram className="social__svg-32px" />
        </a>
      </div>
    </div>
  );
};

export default Social;
