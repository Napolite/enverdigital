import { Add, Icons, Trianlge } from "../../assets";

function Services() {
  return (
    <div className="text-white">
      <div className="flex  p-[10px] h-min w-[90%] m-auto relative justify-between mt-[150px] mb-[100px]">
        <img
          src={Trianlge}
          className="self-start relative -top-[40px] w-[104px] h-[120px]"
        />
        <div className="text-[60px] font-[900] w-[695px] h-[140px] text-center leading-[70px]">
          The Service We Provide For You
        </div>
        <img
          src={Add}
          className="rotate-[31.92deg] w-[42px] h-[42px] relative self-end bottom-[20px]"
        />
      </div>
      <div className="grid grid-cols-3 w-full">
        <div className="flex h-[300px] flex-col justify-center items-center">
          <img src={Icons.Icon1} className="w-[69px] h-[69px]" />
          <div className="text-[28px] mt-[15px] mb-[20px]">Development</div>
          <div className="text-center w-[299px] h-[299px]  text-[18px] leading-[28px] font-[200]">
            Create a platform with the best and coolest quality from us.
          </div>
        </div>
        <div className="flex h-[300px] flex-col justify-center items-center">
          <img src={Icons.Icon2} className="w-[69px] h-[69px]" />
          <div className="text-[28px] mt-[15px] mb-[20px]">UI/UX Designer</div>
          <div className="text-center w-[299px] h-[299px]  text-[18px] leading-[28px] font-[200]">
            We provide UI/UX Design services, and of course with the best
            quality
          </div>
        </div>
        <div className="flex h-[300px] flex-col justify-center items-center">
          <img src={Icons.Icon3} className="w-[69px] h-[69px]" />
          <div className="text-[28px] mt-[15px] mb-[20px]">
            Graphik Designer
          </div>
          <div className="text-center w-[299px] h-[299px]  text-[18px] leading-[28px] font-[200]">
            We provide Graphic Design services, with the best designers
          </div>
        </div>
        <div className="flex h-[300px] flex-col justify-center items-center">
          <img src={Icons.Icon4} className="w-[69px] h-[69px]" />
          <div className="text-[28px] mt-[15px] mb-[20px]">Motion Graphik</div>
          <div className="text-center w-[299px] h-[299px]  text-[18px] leading-[28px] font-[200]">
            Create a platform with the best and coolest quality from us.
          </div>
        </div>
        <div className="flex h-[300px] flex-col justify-center items-center">
          <img src={Icons.Icon5} className="w-[69px] h-[69px]" />
          <div className="text-[28px] mt-[15px] mb-[20px]">Photography</div>
          <div className="text-center w-[299px] h-[299px]  text-[18px] leading-[28px] font-[200]">
            We provide Photography services, and of course with the best quality
          </div>
        </div>
        <div className="flex h-[300px] flex-col justify-center items-center">
          <img src={Icons.Icon6} className="w-[69px] h-[69px]" />
          <div className="text-[28px] mt-[15px] mb-[20px]">Videography</div>
          <div className="text-center w-[299px] h-[299px]  text-[18px] leading-[28px] font-[200]">
            Create a platform with the best and coolest quality from us.
          </div>
        </div>
      </div>
      <img
        src={Add}
        className="rotate-[31.92deg] w-[42px] h-[42px] -mt-[50px] relative self-end bottom-0"
      />
    </div>
  );
}

export default Services;
