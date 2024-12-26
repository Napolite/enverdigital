import { LogoIcon } from "../../assets";

function Footer() {
  return (
    <nav className="flex justify-between text-[#D9D9D9] w-full h-[120px] content-center items-center">
      <div className="w-[25%] flex">
        <img src={LogoIcon} className="w-[40px] h-[40px]" />
        <div className="text-white font-[700] text-[28px] ml-[10px]">Enver</div>
      </div>
      <div className=" flex justify-center w-[50%] ">
        <div className="flex flex-2 justify-between w-[50%]">
          <div>Support</div>
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
        </div>
      </div>
      <div className="w-[25%] flex justify-end">
        © 2020 Enver, All Rights Reserved
      </div>
    </nav>
  );
}

export default Footer;
