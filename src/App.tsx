import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Contact from "./pages/contact/contact";
import Landing from "./pages/Landing/landing";
import Portfolio from "./pages/portfolio/portfolio";
import Services from "./pages/services/services";
import VideoPage from "./pages/video/videoPage";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
