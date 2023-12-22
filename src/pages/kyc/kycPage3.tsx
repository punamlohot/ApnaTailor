import React from "react";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import HorizontalLinearStepper from "../../components/Stepper";
import { useNavigate } from "react-router-dom";

const Kyc3 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/kycStep2");
  };

  const handleSubmit = () => {
    navigate("/experience");
  };

  return (
    <>
      <div className="container p-5" style={{ marginTop: "100px" }}>
        <div className="d-flex align-items-center mb-5">
          <Image
            src="https://cdn4.vectorstock.com/i/1000x1000/07/88/customer-study-kyc-line-icon-vector-38400788.jpg"
            // src="https://cdn-icons-png.flaticon.com/512/1005/1005548.png"
            height="40px"
            width="40px"
          />
          <div className="h1 m-2">Complete Your KYC</div>
        </div>
        <HorizontalLinearStepper />
        <div className="container step3">
          <div className="">
            <Image
              src=""
              height="200px"
              width="500px"
              className="docs-image m-5"
            />
          </div>

          {/* <div className="">
            <Form>
              <FormGroup controlId="formFile">
                <Form.Label>Uploaded Documents</Form.Label>
                <ul className="list-group list-group-flush">
                  {documents.map((file, index) => (
                    <li key={index} className="list-group-item">
                      {file.name}
                    </li>
                  ))}
                </ul>
              </FormGroup>
            </Form>
          </div> */}

          <div className="buttons">
            <Button
              type="submit"
              className="m-1"
              onClick={handleBack}
              style={{
                backgroundColor: "#6E41E7",
                borderRadius: "30px",
                width: "100px",
              }}
            >
              Back
            </Button>
            <Button
              type="submit"
              className="m-1 btn-success"
              onClick={handleSubmit}
              style={{
                borderRadius: "30px",
                width: "100px",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kyc3;
