import { useEffect, useState } from "react";
import { LogoIcon } from "../../assets";
import "./loader.css";

function Loader() {
  const [switchAnim, setSwitch] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSwitch(true);
    }, 4000);
  }, []);
  return (
    <div className="text-white">
      <div className="flex justify-center items-center content-center -translate-y-[50px]  h-screen">
        <img
          src={LogoIcon}
          className={`h-[100px] w-[100px] mr-[20px] ${
            switchAnim ? "loader-logo-leave" : "loader-logo"
          }`}
        />
        <div>
          <div
            className={`text-[60px] font-[Graphik] leading-20 tracking-normal font-[700] ${
              switchAnim ? "logoFade-leave" : "logoFade"
            }`}
          >
            Enver Digital Agency
          </div>
          {/* <div className="underline"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Loader;
