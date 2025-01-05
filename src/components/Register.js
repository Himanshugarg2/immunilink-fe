import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaEnvelope, FaPhone, FaLock, FaUser } from "react-icons/fa"; // Import icons
import { MdDateRange } from "react-icons/md";
import './Register.css'; // Import the new CSS for styling

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    childName: "",
    birthDate: "",
    parentMobile: "",
    parentEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://immunilink.onrender.com/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Registration Successful! You can now log in.');
        navigate('/signin'); // Redirect to login page after successful registration
      } else {
        setError(result.message || "Registration failed!");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <section className="flex-grow-1" style={{ backgroundColor: "#f0f7f0", paddingBottom: "50px" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10">
              <div className="card shadow" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={require('./image.png')}
                      alt="register form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <h5 className="fw-bold mb-3 pb-3" style={{ letterSpacing: "1px", fontFamily: "Montserrat, sans-serif", fontSize: "2rem" }}>
                          Register a new account
                        </h5>

                        {error && <div className="alert alert-danger" role="alert">{error}</div>}

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaUser />
                            </span>
                            <input
                              type="text"
                              id="childName"
                              name="childName"
                              className="form-control form-control-lg"
                              value={formData.childName}
                              onChange={handleInputChange}
                              placeholder="Child's Name"
                              required
                              style={{ fontFamily: "Roboto, sans-serif" }}
                            />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <MdDateRange />
                            </span>
                            <input
                              type="date"
                              id="birthDate"
                              name="birthDate"
                              className="form-control form-control-lg"
                              value={formData.birthDate}
                              onChange={handleInputChange}
                              required
                              style={{ fontFamily: "Roboto, sans-serif" }}
                            />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaPhone />
                            </span>
                            <input
                              type="tel"
                              id="parentMobile"
                              name="parentMobile"
                              className="form-control form-control-lg"
                              value={formData.parentMobile}
                              onChange={handleInputChange}
                              placeholder="Parent's Mobile Number"
                              required
                              style={{ fontFamily: "Roboto, sans-serif" }}
                            />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaEnvelope />
                            </span>
                            <input
                              type="email"
                              id="parentEmail"
                              name="parentEmail"
                              className="form-control form-control-lg"
                              value={formData.parentEmail}
                              onChange={handleInputChange}
                              placeholder="Parent's Email Address"
                              required
                              style={{ fontFamily: "Roboto, sans-serif" }}
                            />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaLock />
                            </span>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control form-control-lg"
                              value={formData.password}
                              onChange={handleInputChange}
                              placeholder="Password"
                              required
                              style={{ fontFamily: "Roboto, sans-serif" }}
                            />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaLock />
                            </span>
                            <input
                              type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              className="form-control form-control-lg"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              placeholder="Confirm Password"
                              required
                              style={{ fontFamily: "Roboto, sans-serif" }}
                            />
                          </div>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={loading} style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px" }}>
                            {loading ? "Registering..." : "Register"}
                          </button>
                        </div>

                        <p className="mb-5 pb-lg-2" style={{ color: "#4caf50" }}>
                          Already have an account? <a href="/signin" style={{ color: "#4caf50" }}>Login here</a>
                        </p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
