import React from "react";
import Slider from "react-slick";

const ProjectSlider = ({
  id,
  name,
  description,
  imgUrls,
  tags,
  repository,
  url,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="project__name">{name}</div>
      <div className="project__slider">
        <Slider {...settings}>
          {imgUrls.map((imgUrl, i) => (
            <div className="slider__wrapper">
              <img
                key={i}
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
      <div className="project__footer">
        <div className="project__tags">
          <div className="tags">
            {tags.map((t, i) => (
              <div
                key={i}
                className="tags__item"
              >
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
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
