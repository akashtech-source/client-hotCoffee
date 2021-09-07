import React from "react";
import slide1 from "../../../images/slideimg (1).jpg";
import slide2 from "../../../images/slideimg (2).jpg";
import slide3 from "../../../images/slideimg (3).jpg";

const HeroSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="  display-1">What is Critical Race Theory</h1>
              <h3 className=" ">
                What is Critical Race Theory and Why Are People So Upset?...
              </h3>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slide2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="  display-1">
                'Shadow Docket' After Aborting Ruling
              </h1>
              <h3 className=" ">
                Supreme Court Order on Texas Abortion Ban...
              </h3>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slide3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="  display-1">Critical Auth Bypass Bug Affect</h1>
              <h3 className=" ">
                Networking, Storage and security solutions provider...
              </h3>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      ;
    </div>
  );
};

export default HeroSlider;
