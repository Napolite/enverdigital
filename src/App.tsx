import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Contact from "./pages/contact/contact";
import Landing from "./pages/Landing/landing";
import Loader from "./pages/loading/load";
import Portfolio from "./pages/portfolio/portfolio";
import Services from "./pages/services/services";
import VideoPage from "./pages/video/videoPage";

function App() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setPage(2);
    }, 5800);
  }, []);
  return (
    <>
      {page === 1 && (
        <div>
          <Loader />
        </div>
      )}
      <div className="h-[3px] fixed top-0 z-999 bg-[#5454d4] w-full scroll-watcher"></div>
      {page === 2 && (
        <div>
          <div className="px-[200px]">
            <Navbar />
          </div>
          <div className="px-[200px]">
            <Landing />
          </div>
          <div className="px-[200px]">
            <VideoPage />
          </div>
          <div className="px-[200px]">
            <Services />
          </div>
          <div className="px-[200px]">
            <Portfolio />
          </div>
          <div className="">
            <Contact />
          </div>
          <div className="px-[200px] mt-[50px]">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
