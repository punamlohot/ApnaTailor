import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import AuthLayout from "./AuthLayout";

const BottomLink = () => {
  return (
    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          By Signing Up, You Agree To Our{" "}
          <Link to="#" className="text-primary fw-bold ms-1">
            "Terms & Policies"
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Register = () => {
  const [phone, setPhone] = React.useState<string | undefined>("");
  const [defaultCountry, setDefaultCountry] = React.useState("in");

  const navigate = useNavigate();

  const logoTailor =
    "https://thumbs.dreamstime.com/z/sewing-machine-cartoon-illustration-isolated-image-59013916.jpg";

  const sendOtp = () => {
    alert("OTP successfully sent on 0000000000");
    navigate("/auth/otp");
  };
  return (
    <>
      {/* {userSignUp ? <Navigate to={"/auth/confirm"}></Navigate> : null} */}

      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="auth-logo mx-auto">
          <Link to="/" className="logo logo-dark text-center">
            <span className="logo-lg">
              <img src={logoTailor} alt="logo" height="70" width="70" />
            </span>
          </Link>
        </div>

        <h6 className="h3 mb-3 mt-3 text-center">Sign Up</h6>

        <div className="mb-2">Mobile Number</div>

        <PhoneInput
          className="mb-3"
          value={phone}
          defaultCountry={defaultCountry}
          onChange={(phone) => setPhone(phone)}
        />

        <div className="mb-3 text-center d-grid">
          <Button type="submit" onClick={sendOtp}>
            Send OTP
          </Button>
        </div>

        <div className="auth-logo mx-auto">
          <Link to="#" className="logo logo-dark text-center">
            Resend OTP
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};

export default Register;
