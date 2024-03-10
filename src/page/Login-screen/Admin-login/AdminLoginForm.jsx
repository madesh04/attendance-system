import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaMobile } from "react-icons/fa6";

export const AdminLoginForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleToggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="card user_login_card col-lg-7">
      <h5 className="card-title text-center m-3 mb-0 text-decoration-underline">
        {showRegisterForm ? "Staff Registration" : "Staff Login"}
      </h5>
      <div className="card-body">
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder={showRegisterForm ? "Staff Name" : "Staff name"}
            />
            <label htmlFor="floatingInput">
              <FaUser />
              {showRegisterForm ? "Staff Name" : "Staff name"}
            </label>
          </div>
          {!showRegisterForm && (
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">
                <FaLock />
                Password
              </label>
            </div>
          )}
          {showRegisterForm && (
            <>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Email"
                />
                <label htmlFor="floatingEmail">
                  <FaEnvelope />
                  Email
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingMobile"
                  placeholder="Mobile Number"
                />
                <label htmlFor="floatingMobile">
                  <FaMobile />
                  Mobile Number
                </label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">
                  <FaLock />
                  Password
                </label>
              </div>
            </>
          )}
          <div className="d-flex justify-content-center my-3">
            <button type="submit" className="btn btn-md w-50 btn-danger">
              {showRegisterForm ? "Register" : "Login"}
            </button>
          </div>
          <p className="text-center">
            {showRegisterForm
              ? "Already have an account? "
              : "Don't have an account? "}
            <span
              onClick={handleToggleForm}
              className="text-danger"
              style={{ cursor: "pointer" }}
            >
              {showRegisterForm ? "Login Here!!" : "Register Here!!"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
