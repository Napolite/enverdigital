import { Squig, Trianlge, Add, Circles, Man } from "../../assets";

function Landing() {
  return (
    <div className="text-[white] flex w-[100%] mt-[80px]">
      <div className="w-[48%]">
        <div className="text-[80px] font-[700] w-[582px]">
          Build Your Awesome Platform
        </div>
        <div className="text-[21px] w-[582px]">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </div>
        <div className="w-[204px] h-[58px] flex justify-center items-center bg-[#5454D4] font-bold rounded-lg rounded mt-[35px]">
          Our Services &#8599;
        </div>
      </div>
      <div className="flex h-[712px] w-full justify-between relative w-full">
        <div className="flex flex-col h-[712px] relative">
          <img
            src={Squig}
            className="relative left-[100px] motion-safe:animate-[bounce_1s_infinite]"
          />
          <img
            src={Trianlge}
            className="bottom-[150px] absolute z-[100] w-[100px] h-[116px] motion-safe:animate-[bounce_2.5s_infinite]"
          />
        </div>
        <div className="relative">
          <div className="w-[375.34px] h-[375.34px] border-[white] border-[2px] border-solid absolute rounded-[22.18px] rounded rotate-[23.64deg] top-[137px] right-[230px]"></div>
          <img
            src={Man}
            className="h-[712px] -mt-[80px] w-[782px] z-[100] relative"
          />
          {/* <div className="w-[px] h-[1399.3px] shadow-kini absolute -top-[330px] -right-[0px] rotate-[63.71deg]"></div> */}
        </div>
        <div className=" h-[712px] relative">
          <img
            src={Circles}
            className="motion-safe:animate-[bounce_2s_infinite]"
          />
          <img
            src={Add}
            className="bottom-[130px] absolute z-[100] motion-safe:animate-[bounce_.8s_infinite]"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
