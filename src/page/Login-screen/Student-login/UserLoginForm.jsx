import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaMobile } from "react-icons/fa";
import { Student } from "../../../Data/Data_Student";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserLoginForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleToggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showRegisterForm) {
      // Register logic
      console.log("Registering...");
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Email:", email);
      console.log("Mobile Number:", mobile);

      const existingUser = Student.find((user) => user.username === username);
      if (existingUser) {
        toast.error(
          "Username already exists. Please choose a different username."
        );
        return;
      }

      const newUser = { username, password, email, mobile };
      Student.push(newUser);
      toast.success("Student Register Successful");

      setUsername("");
      setPassword("");
      setEmail("");
      setMobile("");
    } else {
      // Login logic
      console.log("Logging in...");
      console.log("Username:", username);
      console.log("Password:", password);
      const user = Student.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        toast.success("Login successful!");
        navigate("/student/landing");
      } else {
        // Handle incorrect credentials
        toast.error("Invalid username or password. Please try again.");
      }
    }
  };

  return (
    <div className="card user_login_card col-lg-7">
      <h5 className="card-title text-center m-3 mb-0 text-decoration-underline">
        {showRegisterForm ? "Student Registration" : "Student Login"}
      </h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">
              <FaUser />
              Username
            </label>
          </div>
          {!showRegisterForm && (
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
