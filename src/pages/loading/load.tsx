import { LogoIcon } from "../../assets";
import "./loader.css";

function Loader() {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center content-center -translate-y-[50px]  h-screen">
        <img
          src={LogoIcon}
          className="h-[100px] w-[100px] mr-[20px] loader-logo"
        />
        <div>
          <div className="text-[60px] font-[Graphik] leading-20 tracking-normal font-[700] logoFade">
            Enver Digital Agency
          </div>
          {/* <div className="underline"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Loader;
