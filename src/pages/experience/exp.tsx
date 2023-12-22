import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Experience = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container p-5 d-flex" style={{ marginTop: "100px" }}>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/human-experience-3588184-3055939.png"
          alt="exp"
          height="60px"
          width="60px"
        />
        <div className="h1 m-2">Experience</div>
      </div>
      <Box
        sx={{
          backgroundColor: "#6E41E7",
          width: "600px",
          height: "300px",
          margin: "auto",
          padding: "2rem",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <div className="h3 mb-3 text-light">
          I have stitching experience in category :
        </div>
        <div className="options">
          <Button
            variant="light"
            onClick={() => {
              navigate("/experience/male");
            }}
            className="btn-lg mb-2"
          >
            Male
          </Button>
          <br></br>
          <Button
            variant="light"
            onClick={() => {
              navigate("/experience/female");
            }}
            className="btn-lg mb-2"
          >
            Female
          </Button>
          <br></br>
          <Button
            variant="light"
            onClick={() => {
              navigate("/experience/female");
            }}
            className="btn-lg mb-2"
          >
            Both (Male & Female)
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Experience;
