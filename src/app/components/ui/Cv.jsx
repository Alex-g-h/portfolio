import React from "react";
import { ReactComponent as HeadHunter } from "../../../assets/images/social/hh.svg";
import { ReactComponent as Pdf } from "../../../assets/images/social/pdf.svg";

const CV = () => {
  return (
    <div className="social">
      <div className="social__item">
        <a
          href="https://voronezh.hh.ru/resume/172fbf56ff0b626ded0039ed1f6b744b793072"
          target="blank"
        >
          <HeadHunter className="social__svg-48px" />
        </a>
      </div>
      <div className="social__item">
        <a
          href="https://drive.google.com/file/d/1AW3cIFhPrAAy23b03YqEoStOhPvumkMI/view"
          target="blank"
        >
          <Pdf className="social__svg-48px" />
        </a>
      </div>
    </div>
  );
};

export default CV;
