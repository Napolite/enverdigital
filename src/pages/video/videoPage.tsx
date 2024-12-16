import { useState } from "react";
import Iframe from "react-iframe";
import "./v.css";
// import { BG } from "../../assets";?

function VideoPage() {
  const [url, seturl] = useState<string>();

  const onClick = () => {
    seturl(
      "https://www.youtube.com/embed/mnJob23FHq4?si=Ii3UzH0fsMZsT69V&autoplay=1&mute=0"
    );
  };

  return (
    <div className="text-[white] mb-[100px] mt-[80px]">
      <div className="flex items-start content-start mb-[50px]">
        <div className="text-[60px] font-[700] w-[568px] mr-[30px]">
          Why Enver is the best choice
        </div>
        <div className="text-[21px] w-[568px] mt-[30px]">
          Watch this one minute video so you understand why you should use our
          services!
        </div>
      </div>
      {!url ? (
        <div className="w-full h-[670px] img-bg" onClick={onClick}>
          {/* <img src={BG} className="w-full h-[670px] bg-cover" /> */}
        </div>
      ) : (
        <div>
          <Iframe
            url={url}
            width="100%"
            height="670px"
            id=""
            className=""
            display="block"
            position="relative"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}
    </div>
  );
}

export default VideoPage;
