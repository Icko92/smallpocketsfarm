import React from "react";
// import { SRLWrapper } from "simple-react-lightbox";

import "./Main.styles.scss";
import mainlogo from "../../images/navlogo.png";
// import img1 from "../../images/1.jpg";
// import img2 from "../../images/2.jpg";
// import img3 from "../../images/3.jpg";
import followus from "../../images/followus.png";

function Main() {
  return (
    <div className="main">
      <div className="main-logo">
        <img src={mainlogo} alt="mainlogo" />
      </div>
      <div className="card our-process">
        <h1>OUR PROCESS</h1>
        <p>
          As a New York Farm Cidery & Brewery, Small Pockets Farm tries to use
          100% New York grown products. Our approach to crafting cider and beer
          is to hone in on expressing the ingredients while maintaining balance.
          Analysis helps to dial things in, but in the end, it's all about
          trials and tastings. We are also proud to be sulfite free!
        </p>
      </div>
      <div className="card our-story">
        <h1>OUR STORY</h1>
        <p>
          Being a part of the industry for over a decade has helped define the
          path towards creating quality products at an affordable price.  It
          seems the days of going tasting in a farmer's garage are slowly
          disappearing. It was there that, as a young winemaker, I had truly
          been bitten by the fementation bug.  Our goal is to bring back that
          feeling of connection.  To interact with someone in the tasting room
          that understands the process and trials of working outside as well as
          in the cellar.  There may be mud in the tasting room from our muck
          boots, but we hope you're willing to accept that to have a closer view
          of the world on the other side of the glass.
        </p>
      </div>
      <div className="card visit-us">
        <h1>VISIT US</h1>
        <p>
          Come out and explore acres of carved out trails highlighting the New
          York flora with periodic views of Cayuga Lake.  Relax at a secluded
          picnic table off one of the many trails or enjoy some of our hidden
          yard games.  We'd like your mind, body and taste buds to "drink in"
          New York.  Feel free to strike up conversation with others in the
          tasting room or wander off and find your own little spot in the Finger
          Lakes.
        </p>
      </div>
      <div className="gallery-container">
        {/* <SRLWrapper>
          <a href={img1}>
            <img src={img1} alt="" />
          </a>
          <a href={img2}>
            <img src={img2} alt="" />
          </a>
          <a href={img3}>
            <img src={img3} alt="" />
          </a>
          <a href={img2}>
            <img src={img2} alt="" />
          </a>
          <a href={img2}>
            <img src={img2} alt="" />
          </a>
        </SRLWrapper> */}
      </div>
      <div className="follow-us-container">
        <img src={followus} alt="img" />
        <a
          href="https://www.instagram.com/smallpocketsfarm/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          {""}
        </a>
      </div>
    </div>
  );
}

export default Main;
