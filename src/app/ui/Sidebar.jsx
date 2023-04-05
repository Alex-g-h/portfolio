import React from "react";
import Social from "../ui/Social";
import CV from "./Cv";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header"></div>
      <div className="sidebar__content">
        <div className="profile">
          <img
            className="profile__avatar"
            src={require("../../assets/images/profile_photo.jpg")}
            alt=""
          />
          <div className="profile__header">
            <div className="profile__name">Булыгин Алексей</div>
            <div className="profile__profession">Frontend developer</div>
          </div>
          <div className="profile__contacts">
            <Social />
          </div>
          <div className="cv">
            <div className="cv__caption">Моё резюме</div>
            <CV />
            <div className="cv__info">
              Более 17 лет опыта разработки ПО и исследовательской деятельности.
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
