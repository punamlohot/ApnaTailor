import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import AuthLayout from "./AuthLayout";
import OtpInput from "react-otp-input";
import RegisterModal from "./RegisterModal";

const BottomLink = () => {
  return (
    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          Didn't recieve your pin ?{" "}
          <Link
            to={"/auth/register"}
            className="fw-bold ms-1"
            style={{ textDecoration: "none", color: "#6E41E7" }}
          >
            Change Number
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const EnterOtp = () => {
  const [otp, setOtp] = useState<string | undefined>("");
  const [openModal, setOpenModal] = React.useState(false);
  // const navigate = useNavigate();

  const logoTailor =
    "https://thumbs.dreamstime.com/z/sewing-machine-cartoon-illustration-isolated-image-59013916.jpg";

  const SignUp = () => {
    // navigate("/profile");
    setOpenModal(true);
  };

  return (
    <>
      {/* {userSignUp ? <Navigate to={"/auth/confirm"}></Navigate> : null} */}
      <div style={{ marginTop: "200px" }}>
        <AuthLayout bottomLinks={<BottomLink />}>
          <div className="auth-logo mx-auto">
            <Link to="/" className="logo logo-dark text-center">
              <span className="logo-lg">
                <img src={logoTailor} alt="logo" height="70" width="70" />
              </span>
            </Link>
          </div>

          <h6 className="h3 mb-3 mt-3 text-center">Sign Up</h6>
          <div className="h6 mb-3">
            <p className="text-center">
              We have sent a pin to 000000000. Please enter the pin below.
            </p>
          </div>
          <div className="otp mb-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span> - </span>}
              renderInput={(props: any) => <input {...props} />}
              inputStyle={{
                width: "30px", // Adjust the width as per your requirement
                height: "30px", // Adjust the height as per your requirement
                fontSize: "16px", // Adjust the font size as per your requirement
                margin: "0 5px", // Adjust the margin as per your requirement
                color: "blue",
              }}
            />
          </div>
          <div className="text-center mb-5">
            <Link
              to="#"
              className="fw-bold"
              style={{ textDecoration: "none", color: "#6E41E7" }}
            >
              Resend OTP
            </Link>
          </div>
          <div className="mb-3 text-center d-grid">
            <Button
              type="submit"
              onClick={SignUp}
              style={{ backgroundColor: "#6E41E7", borderRadius: "30px" }}
            >
              Sign Up
            </Button>
          </div>
          <RegisterModal setOpenModal={setOpenModal} openModal={openModal} />
        </AuthLayout>
      </div>
    </>
  );
};

export default EnterOtp;
