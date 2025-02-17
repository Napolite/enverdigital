import { LogoIcon } from "../../assets";

function Navbar() {
  return (
    <nav className="flex justify-between text-[#D9D9D9] w-full h-[120px] content-center items-center">
      <div className="w-[25%] flex">
        <img src={LogoIcon} className="w-[40px] h-[40px]" />
        <div className="text-white font-[700] text-[28px] ml-[10px]">Enver</div>
      </div>
      <div className=" flex justify-center w-[50%] ">
        <div className="flex flex-2 justify-between w-[50%]">
          <div className="text-[#5454D4] cursor-pointer">Home</div>
          <div
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer"
          >
            Services
          </div>
          <div
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer"
          >
            Our Project
          </div>
          <div
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer"
          >
            About Us
          </div>
        </div>
      </div>
      <div className="w-[25%] flex justify-end">
        <div className="border-[white] border-solid border-[1px] rounded rounded-[5px] w-[157px] h-[44px] flex justify-center items-center">
          Contact Us
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
