import React from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="desktopNav">
        <nav>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} id="Logo"></img>
      </div>
     
      <section>
        <div className="firstBox">
          <picture>
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/image-web-3-mobile.jpg 767w,
              ${process.env.PUBLIC_URL}/images/image-web-3-desktop.jpg 1080w`}
              sizes="(min-width: 768px) 100vw, 50vw"
            />
            <img
              src={
                process.env.PUBLIC_URL + "/images/image-web-3-mobile.jpg 767w"
              }
              alt="Description of the image"
            />
          </picture>

          <div className="firstBoxflex">
            <div>
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="secondBox">
          <span>New</span>
          <div className="pDiv">
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="pDiv">
            <h2>The Downsides of AI Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="Div">
            <h2>Is VC Funding Drying Up?</h2>
            <p id="noBorder">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </section>
      <div className="thirdBox">
        <div id="thirdBoxFlex">
          <img
            src={process.env.PUBLIC_URL + "/images/image-retro-pcs.jpg"}
          ></img>
          <div>
            <span>01</span> <h3>Reviving Retro PCs</h3>{" "}
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div id="thirdBoxFlex">
          <img
            src={process.env.PUBLIC_URL + "/images/image-top-laptops.jpg"}
          ></img>
          <div>
            <span>02</span>
            <h3>Top 10 Laptops of 2022</h3>
            <p> Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div id="thirdBoxFlex">
          <img
            src={process.env.PUBLIC_URL + "/images/image-gaming-growth.jpg"}
          ></img>
          <div>
            <span>03</span>
            <h3>The Growth of Gaming</h3>{" "}
            <p> How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>

      <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Che Fernandez</a>.
      </div>
    </div>
  );
}

export default App;
