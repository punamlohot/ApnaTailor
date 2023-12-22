import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Form, Button, FormGroup } from "react-bootstrap";
import HorizontalLinearStepper from "../../components/Stepper";
import { useNavigate } from "react-router-dom";

const Kyc2 = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [documents, setDocuments] = React.useState<File[]>([]);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      const filesArray: File[] = Array.from(selectedFiles);
      setDocuments([...documents, ...filesArray]);
    }
  };

  const handleAddFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleNext = () => {
    navigate("/kycStep3");
  };
  const handleBack = () => {
    navigate("/kycStep1");
  };

  return (
    <>
      <Container className="p-5" style={{ marginTop: "100px" }}>
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
        {/* <div className="text-center">
          <Image
            src=""
            height="200px"
            width="500px"
            className="docs-image m-5"
          />
        </div> */}
        {/* <Form className="m-5" style={{ width: "30%" }}>
          <FormGroup>
            <label htmlFor="exampleInputEmail1">Enter Adhaar Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter here..."
            />
            <small id="inputHelp" className="form-text text-muted">
              We'll never share your info with anyone else.
            </small>
          </FormGroup>
        </Form> */}

        <div className="m-5 text-center">
          <Button
            variant="outline-primary"
            onClick={handleAddFileClick}
            style={{
              borderColor: "#6E41E7",
              color: "#6E41E7",
              borderRadius: "30px",
            }}
          >
            Upload Business Documents
          </Button>
        </div>
        <div className="m-5 text-center">
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

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              multiple
            />
          </Form>
        </div>

        <div className="text-center">
          <Button
            type="button"
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
            type="button"
            className="m-1 btn-success"
            onClick={handleNext}
            style={{
              // backgroundColor: "#6E41E7",
              borderRadius: "30px",
              width: "100px",
            }}
          >
            Next
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Kyc2;
