import React from "react";
import { Squig, Trianlge, Add, Circles, Man } from "../../assets";

function Landing() {
  return (
    <div>
      <div>
        <div>Build Your Awesome Platform</div>
        <div>
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </div>
        <div>Our Services &#8599;</div>
      </div>
      <div>
        <div>
          <img src={Squig} />
          <img src={Trianlge} />
        </div>
        <div>
          <img src={Man} />
        </div>
        <div>
          <img src={Circles} />
          <img src={Add} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
