import { navbarData } from "../../Data/Data_Nav";
import Logo from "../../assets/PNG/Logo.png";
import Button from "../Button/CommonBtn";
import IconButton from "../Button/IconButton";
import { FaShop, FaUser } from "react-icons/fa6";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="custom_navbar navbar navbar-expand-lg container">
      <div className="container ">
        <a className="navbar-brand text-white logo_name" href="#">
          <img src={Logo} alt="Bootstrap" width="55" height="55" />
          Food Bay
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto   mb-2 mb-lg-0">
            {navbarData.map((link, index) => (
              <>
                <li className="nav-item " key={link.id}>
                  <a
                    className="nav-link text-white text-uppercase fw-bold"
                    href={link.link}
                  >
                    {link.text}
                  </a>
                </li>
                {index < navbarData.length - 1 && (
                  <div className="vr custom_vr"></div>
                )}
              </>
            ))}
            <IconButton
              icon={FaUser}
              text={"Student"}
              className={"btn-primary mx-2"}
            />
            <IconButton
              icon={FaShop}
              text={"Admin"}
              className={"btn-primary mx-2"}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
