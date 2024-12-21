import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landing from "./pages/Landing/landing";
import Services from "./pages/services/services";
import VideoPage from "./pages/video/videoPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Landing />
        <VideoPage />
        <Services />
      </div>
    </>
  );
}

export default App;
