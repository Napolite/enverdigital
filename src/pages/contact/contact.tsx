import { Add, Circles } from "../../assets";

function Contact() {
  return (
    <div className="bg-[#1E1E20] h-[506px] w-full text-[#ffffff]  px-[200px] mt-[80px] pt-[50px] relative">
      <img src={Add} className="w-[42px] h-[42px]  absolute right-[200px]" />
      <div className="flex justify-between w-full  mt-[100px] mb-[50px]">
        <div className="text-[60px] font-[900] w-[826px]">
          Contact us for the service you want to use
        </div>
        <div>
          <button className="w-[201px] h-[60px] bg-[#5454D4] rounded rounded-lg font-[700]">
            Contact us
          </button>
        </div>
      </div>
      <img src={Circles} className="w-[51px] h-[60px]" />
    </div>
  );
}

export default Contact;
