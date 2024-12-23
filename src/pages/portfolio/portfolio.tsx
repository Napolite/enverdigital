import { Circles, p01, p02, p03 } from "../../assets";

function Portfolio() {
  return (
    <div className="text-white mt-[80px]">
      <div className="flex  p-[10px] h-min w-[90%] m-auto relative justify-between mt-[150px] mb-[100px]">
        <div className="text-[60px] font-[900] w-[695px] h-[140px] text-center leading-[70px]">
          Our Awesome Portfolio
        </div>
        <img
          src={Circles}
          className="rotate-[31.92deg] w-[62px] h-[72.94px] relative self-end bottom-0"
        />
      </div>
      <div>
        <div>
          <img src={p01} />
        </div>
        <div>
          <img src={p02} />
        </div>
        <div>
          <img src={p03} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
