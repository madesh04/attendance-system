import { useState } from "react";
import { FaShop, FaUser } from "react-icons/fa6";
import { UserLoginForm } from "../Student-login/UserLoginForm";
import { AdminLoginForm } from "../Admin-login/AdminLoginForm";
import "./Home.css";

export const Home = () => {
  const [showStudentLoginForm, setShowStudentLoginForm] = useState(true);

  const handleToggleForm = (isStudent) => {
    setShowStudentLoginForm(isStudent);
  };

  return (
    <section className="login_home_section">
      <div className="col-lg-6 slogan_section d-flex  flex-column">
        <div className="login_banner_text   d-flex align-items-center justify-content-center flex-column">
          <h2 className="text-white slogan_text text-center">
            Effortless Attendance Management
            <p className="login_quote">
              &quot;Simplifying Student Tracking&quot;
            </p>
          </h2>

          <div className="login_btn_grp">
            <button
              className="custom_btn"
              onClick={() => handleToggleForm(true)}
            >
              <FaUser className="me-2" />
              Login As Student
            </button>
            <button
              className="custom_btn"
              onClick={() => handleToggleForm(false)}
            >
              <FaShop className="me-2" />
              Login As Admin
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-center slogan_section  align-items-center">
        {showStudentLoginForm ? <UserLoginForm /> : <AdminLoginForm />}
      </div>
    </section>
  );
};
