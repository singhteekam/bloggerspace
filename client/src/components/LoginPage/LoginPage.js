import React, { useState, useContext } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { FaGoogle, FaFacebook, FaGithub, FaMicrosoft } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

import { AuthContext } from "contexts/AuthContext";

function LoginPage() {
  const { user, setUser, loading, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled]= useState(false);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    setIsDisabled(true);
    e.preventDefault();

    // Create the request body
    const requestBody = {
      email: email,
      password: password,
    };

    // Send the login request to the backend
    axios
      .post("/api/users/login", requestBody)
      .then(async (response) => {
        // Handle the login response here
        console.log(response.data.token);
        console.log(response.data.userDetails);

        // Retrieve the token from the response
        const { token } = response.data;

        // Store the token in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem('lastLogin', response.data.previousLogin);

        // Check if the login was successful
        if (response.status === 200) {
          // setSuccess("Login successful");
          // setError("");
          setUser(response.data.userDetails);

          const headers = {
            Authorization: `Bearer ${token}`,
          };
          console.log(headers);

          if (response.data.userDetails.isVerified) {
            // await axios.get("/api/blogs", { headers });

            // toast.success("Login successful!");

            // Redirect to the homepage
            setTimeout(() => {
              navigate(from, { replace: true });
            }, 1500);
          } else {
            setTimeout(() => {
              navigate("/verify-account", {
                state: {
                  email: response.data.userDetails.email,
                  fullName: response.data.userDetails.fullName,
                },
              });
            }, 1000);
          }
        } else {
          setIsDisabled(false);
          toast.error("Login Failed.");
        }
      })
      .catch((error) => {
        // Handle any errors here
        setIsDisabled(false);
        console.error(error);
        toast.error(error.response.data.message);
      });
  };


  const googleAuth= ()=>{
    window.open(`${process.env.REACT_APP_BACKEND_URL}/api/users/auth/google`, "_self")
  }
  // const facebookAuth= ()=>{
  //   window.open(`${process.env.REACT_APP_BACKEND_URL}/api/users/auth/facebook`, "_self")
  // }
  const githubAuth= ()=>{
    window.open(`${process.env.REACT_APP_BACKEND_URL}/api/users/auth/github`, "_self")
  }
  // const microsoftAuth= ()=>{
  //   window.open(`${process.env.REACT_APP_BACKEND_URL}/api/users/auth/microsoft`, "_self")
  // }
  // const linkedinAuth= ()=>{
  //   window.open(`${process.env.REACT_APP_BACKEND_URL}/api/users/auth/linkedin`, "_self")
  // }
  // const twitterAuth= ()=>{
  //   window.open(`${process.env.REACT_APP_BACKEND_URL}/api/users/auth/twitter`, "_self")
  // }


  return (
    <div className="newpage-section">
      <Helmet>
        <title>Login - BloggerSpace</title>
      </Helmet>
      <Container>
        <Row className="pt-3">
          <Col md={6}>
            {/* <img
              src="assets/signin.png"
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bb9Mz7yTmUO-Ky9T9pTXHb2W5cUW9_L4FWcxCyGq5A&s"
              className="loginpage-image"
            /> */}
            <CiLock className="lock-icon" />
          </Col>
          <Col md={6}>
            <div className="login-form bgcolor-mint">
              <h2 className="text-center page-title">Login</h2>
              <div className="heading-underline mx-auto"></div>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    key="email"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="password">
                  {/* <Form.Label>Password</Form.Label> */}
                  <div className="password-input">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Password"
                      className="mb-3"
                      key="password"
                    >
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </FloatingLabel>
                    <i
                      className={`toggle-password fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                </Form.Group>

                <Button
                  type="submit"
                  className="bs-button"
                  block
                  disabled={isDisabled}
                >
                  {isDisabled?"Please wait...":"Login"}
                </Button>
                <Button
                  type="submit"
                  onClick={() => navigate("/forgotpassword")}
                  className="bs-button-outline mx-1"
                  block
                >
                  Forgot password?
                </Button>
                <div>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </div>

                <center>or</center>

                <center>
                  <Button
                  variant="danger"
                  onClick={googleAuth}
                  className="forgotpassbutton"
                  block
                >
                  <FaGoogle title="Google" className="mb-1" />
                  {" "}Continue with Google
                </Button>
                {/* <Button
                  variant="primary"
                  onClick={facebookAuth}
                  className="forgotpassbutton"
                  block
                >
                  <FaFacebook title="Google" className="mb-1" />
                  {" "}Sign in with Facebook
                </Button> */}
                <Button
                  variant="dark"
                  onClick={githubAuth}
                  className="forgotpassbutton"
                  block
                >
                  <FaGithub title="Github" className="mb-1" />
                  {" "}Continue with Github
                </Button>
                {/* <Button
                  variant="primary"
                  onClick={microsoftAuth}
                  className="forgotpassbutton"
                  block
                >
                  <FaMicrosoft title="Github" className="mb-1" />
                  {" "}Sign in with Microsoft
                </Button> */}
                {/* <Button
                  variant="primary"
                  onClick={linkedinAuth}
                  className="forgotpassbutton"
                  block
                >
                  <FaGithub title="Linkedin" className="mb-1" />
                  {" "}Sign in with Linkedin
                </Button> */}
                {/* <Button
                  variant="primary"
                  onClick={twitterAuth}
                  className="forgotpassbutton"
                  block
                >
                  <FaGithub title="Linkedin" className="mb-1" />
                  {" "}Sign in with Twitter
                </Button> */}
                </center>
                {/* <center>or</center> <br />
                <Link className="btn btn-danger" to={`${process.env.REACT_APP_BACKEND_URL}/api/users/auth/google`}><FaGoogle title="Google" className="mb-1" /> Sign in with Google</Link> */}
                {/* <Link className=" mx-2 btn btn-primary" to="#"><FaFacebook title="Facebook" className="mb-1"  /> Facebook</Link> */}
              </Form>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
      {/* <div className="login-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8">
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default LoginPage;
