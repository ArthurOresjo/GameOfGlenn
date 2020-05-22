import React from "react";
import logo from "../components/assets/logo.svg";
import glenn from "../components/assets/glenn.png";
import banner1 from "../components/assets/banner1.svg";
import banner2 from "../components/assets/banner2.svg";
import bannerMedia from "../components/assets/bannerMedia.svg";
import bannerMediaInfo from "../components/assets/bannerInfo.svg";
import snake from "../components/assets/snake.svg";
import GOG from "../components/assets/GOG-Banner.svg";

const Start = () => (
  <div className="App-start">
    <div className="Logo-Background">
      <img src={logo} className="Logo" alt="logo" />
    </div>
    <header>
      <button className="Button-worlds">VÄRLDAR</button>
      <button className="Button-characters">KARAKTÄRER</button>
      <button className="Button-aboutGOG">OM GOG</button>
    </header>
    <div className="Map"></div>
    <main>
      <div className="GOG-Banner">
        <img src={GOG} className="gog-banner" alt="snake" />
      </div>
      <aside>
        <div className="First-Aside">
          <div className="Banner">
            <img src={banner1} alt="" />
          </div>
          <div className="BannerMediaInfo">
            <img src={bannerMedia} alt="" />
          </div>
          <p className="Text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>
          <div className="Glenn">
            <img src={glenn} className="glenn" alt="glenn" />
          </div>
        </div>
        <div className="Second-Aside">
          <div className="Banner">
            <img src={banner2} alt="" />
          </div>
          <div className="BannerMediaInfo">
            <img src={bannerMediaInfo} alt="" />
          </div>
          <p className="Text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>
          <img src={snake} className="Snake" alt="snake" />
        </div>
      </aside>
    </main>
  </div>
);

export default Start;