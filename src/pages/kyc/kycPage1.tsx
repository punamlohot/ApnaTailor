import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Form, Button, FormGroup } from "react-bootstrap";
import HorizontalLinearStepper from "../../components/Stepper";
// import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DocumentAlert from "./DocumentAlert";

const Kyc = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [documents, setDocuments] = React.useState<File[]>([]);
  const [openModal, setOpenModal] = React.useState(false);
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
    navigate("/kycStep2");
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
        {/* <hr className="" style={{ color: "black" }}></hr> */}
        <HorizontalLinearStepper />
        {/* */}
        {openModal && (
          <DocumentAlert setOpenModal={setOpenModal} openModal={openModal} />
        )}
        <Form className="m-5" style={{ width: "30%" }}>
          <FormGroup>
            <label htmlFor="exampleInputEmail1">Enter Adhaar Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. 4524 8354 5250"
            />
            <small id="inputHelp" className="form-text text-muted">
              We'll never share your info with anyone else.
            </small>
          </FormGroup>
        </Form>

        <div className="m-5">
          <Button
            variant="outline"
            onClick={handleAddFileClick}
            style={{
              borderColor: "#6E41E7",
              color: "#6E41E7",
              borderRadius: "30px",
            }}
          >
            Add Supporting Document
          </Button>
        </div>

        <Form className="m-5">
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

        <div className="m-5">
          <Button
            type="button"
            onClick={handleNext}
            style={{
              backgroundColor: "#6E41E7",
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

export default Kyc;
