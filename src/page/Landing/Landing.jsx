import Navbar from "../../component/Navbar/Navbar";
import "./Landing.css";
const Landing = () => {
  return (
    <section className="container-fluid w-100 gx-0">
      <div className="navbar_section">
        <Navbar />
      </div>
      <div className="slider_section container-fluid d-flex row">
        <div className="col-lg-6">
          <h1>Sapmle text</h1>
        </div>
        <div className="carousel_section col-lg-6 "></div>
      </div>
    </section>
  );
};

export default Landing;
