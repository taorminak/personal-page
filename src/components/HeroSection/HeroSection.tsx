import img from "../../assets/images/anna.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container_info_pic">
      <div className="container_pic">
        <div className="hero_info">
          <h1>ANNA OSTANINA</h1>
          <h2>
            INFORMATION & CONTACTS
            <ul>
              <li>Location: Vienna, Austria</li>
              <li>mobile: +436649122408</li>
              <li>e-mail: ostanina.anna@yahoo.com </li>
              <li>
                <a href="https://github.com/taorminak">Github profile</a>
              </li>
            </ul>
          </h2>
        </div>
        <div className="hero_pic">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
