import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landing from "./pages/Landing/landing";
import VideoPage from "./pages/video/videoPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Landing />
        <VideoPage />
      </div>
    </>
  );
}

export default App;
