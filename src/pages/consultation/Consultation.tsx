import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/consultationmode");
  };

  const handleNo = () => {
    navigate("/consultationmode");
  };

  return (
    <>
      <Container fluid style={{ marginTop: "150px" }}>
        <div className="d-flex m-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1478/1478254.png"
            alt="mode"
            width="50px"
            height="50p%x"
            className="me-3"
          />
          <div className="h1">Consultation Mode</div>
        </div>
        <Box
          sx={{
            backgroundColor: "#6E41E7",
            width: "500px",
            height: "200px",
            margin: "auto",
            padding: "2rem",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          <div className="h5 text-light">Do you have a tailoring shop ? </div>
          <Button className="m-5" size="lg" variant="light" onClick={handleYes}>
            Yes
          </Button>
          <Button className="m-5" size="lg" variant="light" onClick={handleNo}>
            No
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Consultation;

export const ConsultationMode = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Container fluid style={{ marginTop: "150px" }}>
        <div className="d-flex m-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1478/1478254.png"
            alt="mode"
            width="50px"
            height="50px"
            className="me-3"
          />
          <div className="h1">Consultation Mode</div>
        </div>
        <Box
          sx={{
            backgroundColor: "#6E41E7",
            width: "500px",
            height: "fit-content",
            margin: "auto",
            padding: "3rem",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          <div className="h5 mb-3 text-light">
            Choose the mode of consultation between you and your potential
            clients
          </div>
          <Button
            className={`m-2 ${isHomeHovered ? "hovered" : ""}`}
            size="lg"
            variant="light"
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
            onClick={() => {
              navigate("/workinghrs-at-home");
            }}
          >
            At Home Consultation
            {isHomeHovered && (
              <div className="h6" style={{ color: "#6E41E7" }}>
                At-home consultation is where the tailor will go to the client’s
                house and provide advice, guidance and also assess to the
                client’s requirements.
              </div>
            )}
          </Button>
          <br></br>
          <Button
            className={`m-2 ${isShopHovered ? "hovered" : ""}`}
            size="lg"
            variant="light"
            onMouseEnter={() => setIsShopHovered(true)}
            onMouseLeave={() => setIsShopHovered(false)}
            onClick={() => {
              navigate("/workinghrs-at-shop");
              // Add your functionality here for onClick
            }}
          >
            At Shop Consultation
            {isShopHovered && (
              <div className="h6" style={{ color: "#6E41E7" }}>
                At-Shop consultation is where the tailor will go to the client’s
                house and provide advice, guidance and also assess to the
                client’s requirements.
              </div>
            )}
          </Button>
          <br></br>
          <Button
            className="m-1"
            size="lg"
            variant="light"
            onClick={() => {
              // Add your functionality here for onClick
            }}
          >
            Hybrid/Both
          </Button>
        </Box>
      </Container>
    </>
  );
};
