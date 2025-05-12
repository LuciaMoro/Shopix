import FbIcon from "../../assets/facebook.svg";
import YtIcon from "../../assets/youtube.svg";
import XIcon from "../../assets/x.svg";
import InstaIcon from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className="bg-dark p-4 d-flex position-sticky bottom-0 w-100 ">
      <div className="text-white">
        <span className="text-bg">©</span> 2025 Lucia Morosan
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center ms-4">
          <img src={FbIcon} height={18} alt="fb" />{" "}
          <span className="text-white ms-1">Facebook</span>
        </div>
        <div className="d-flex align-items-center ms-4">
          <img src={YtIcon} height={18} alt="fb" />{" "}
          <span className="text-white ms-1">Youtube</span>
        </div>
        <div className="d-flex align-items-center ms-4">
          <img src={XIcon} height={18} alt="fb" />{" "}
          <span className="text-white ms-1">X</span>
        </div>
        <div className="d-flex align-items-center ms-4">
          <img src={InstaIcon} height={18} alt="fb" />{" "}
          <span className="text-white ms-1">Instagram</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
