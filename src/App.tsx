import "./App.css";
import QAndA from "./components/Q&A/Q&A";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="container_body">
      <div className="container_info">
        <HeroSection />
        <QAndA />
      </div>
      <div className="links">
        <a href="https://www.flaticon.com/ru/free-icons/" title="bird-icon">
          Bird icon by Freepik - Flaticon{" "}
        </a>

        <a href="https://unsplash.com/@afgprogrammer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Photo by Mohammad Rahmani
        </a>
      </div>
    </div>
  );
}

export default App;
