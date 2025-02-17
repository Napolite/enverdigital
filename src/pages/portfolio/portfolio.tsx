import { Circles, p01, p02, p03, Squig } from "../../assets";

function Portfolio() {
  return (
    <div className="text-white mt-[80px] h-full" id="projects">
      <div className="flex  p-[10px] h-min w-full m-auto relative justify-between mt-[150px] mb-[100px]">
        <div className="text-[60px] font-[900] w-[695px] h-[140px] text-center leading-[70px]">
          Our Awesome Portfolio
        </div>
        <img
          src={Circles}
          className="rotate-[31.92deg] w-[62px] h-[72.94px] relative self-end bottom-0"
        />
      </div>
      <div className="flex w-full m-auto justify-between relative">
        <div className="bg-[#1E1E20] w-[454px] h-[371px] flex justify-center items-center content-center relative top-0 rounded rounded-xl">
          <img src={p02} className="w-[85%] h-[85%]" />
        </div>
        <div className="bg-[#1E1E20] w-[454px] h-[371px] flex justify-center items-center content-center relative top-[50px] rounded rounded-xl">
          <img src={p01} className="w-[85%] h-[85%]" />
        </div>
        <div className="bg-[#1E1E20] w-[454px] h-[371px] flex justify-center items-center content-center relative top-[100px] rounded rounded-xl">
          <img src={p03} className="w-[85%] h-[85%]" />
        </div>
      </div>
      <img src={Squig} className="mt-[150px]" />
    </div>
  );
}

export default Portfolio;
