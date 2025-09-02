import React from "react";
import Slider from "react-slick";
import { ReactComponent as GooglePlay } from "../../../assets/images/social/googleplay.svg";
import { ReactComponent as AppStore } from "../../../assets/images/social/appstore.svg";

const ProjectSlider = ({
  id,
  name,
  description,
  demos,
  imgUrls,
  tags,
  repository,
  url,
  googlePlay,
  appStore,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="project__name">{name}</div>
      <div className="project__slider">
        <Slider {...settings}>
          {imgUrls.map((imgUrl, i) => (
            <div className="slider__wrapper" key={i}>
              <img
                className="slider__item"
                src={require(`/src/${imgUrl}`)}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="project__description">
        <p>{description}</p>
      </div>
      {demos && (
        <div className="project__demos">
          {demos.map((d, i) => (
            <a key={i} href={d?.href} target="blank">
              {d?.text}
            </a>
          ))}
        </div>
      )}
      <div className="project__footer">
        <div className="project__tags">
          <div className="tags">
            {tags.map((t, i) => (
              <div key={i} className="tags__item">
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="project__links">
          {repository && (
            <a
              className="btn btn--green btn--rounded btn--sm"
              href={repository}
              target="blank"
            >
              Репозиторий
            </a>
          )}
          {url && (
            <a
              className="btn btn--blue btn--rounded btn--sm"
              href={url}
              target="blank"
            >
              Ссылка
            </a>
          )}
          {googlePlay && (
            <div className="social__item">
              <a href={googlePlay} target="blank">
                <GooglePlay className="social__svg-mobile-48px" />
              </a>
            </div>
          )}
          {appStore && (
            <div className="social__item">
              <a href={appStore} target="blank">
                <AppStore className="social__svg-mobile-48px" />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
