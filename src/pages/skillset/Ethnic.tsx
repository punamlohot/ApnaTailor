import React, { useState } from "react";
import {
  Container,
  ListGroup,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import ModalComponent from "../../components/ModalComponent";
import AddItem from "./AddItem";
import { Accord } from "../../components/Accord";

const Ethnic = () => {
  const navigate = useNavigate();
  const skillsList = ["Ethnic", "Western", "Casual", "More"];

  const headings = [
    "Saree",
    "Salwar-Suit",
    "Kurta-Salwar",
    "Lehenga/Choli",
    "Garara/Sharara",
  ];
  const outfits = [
    ["Package", "blouse", "peti-coat", "pico-fall"],
    ["Package", "salwar", "suit"],
    ["Package", "Kurta", "Salwar", "Chudidar"],
    ["Package", "Lehenga", "Choli"],
    ["Package", "Dupatta"],
  ];

  const sample =
    "https://clipart-library.com/2023/14-148599_dress-clip-art-free-clipart-images-purple-dress-clipart.png";

  const [searchTerm, setSearchTerm] = useState("");
  const [openOuterModal, setOpenOuterModal] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleNext = () => {
    navigate("/consultation");
  };

  return (
    <>
      <Container fluid style={{ marginTop: "100px" }}>
        <div className="container d-flex mb-5">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/human-experience-3588184-3055939.png"
            alt="skillset"
            width="50px"
            height="50p%x"
          />
          <div className="h1">SkillSet</div>
        </div>
        <div className="container">
          <Row className="">
            <Col sm={1} className="d-flex flex-column align-items-start">
              <ListGroup>
                {skillsList.map((skill, index) => (
                  <ListGroup.Item key={index}>
                    <Link
                      to={`/${skill.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "#6E41E7" }}
                      className="d-flex flex-column text-center"
                    >
                      <img
                        src={sample}
                        alt="ethnic"
                        width="60px"
                        height="50px"
                      ></img>
                      {skill}
                    </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col sm={11} className="">
              <Form className="mb-3">
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Search for outfit type"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <InputGroup.Text>
                    <Search />
                  </InputGroup.Text>
                </InputGroup>
              </Form>

              <ModalComponent
                openModal={openOuterModal}
                setOpenModal={() => setOpenOuterModal(false)}
                title="Add Custom Item You Sew"
                body={<AddItem />}
              />
              <ListGroup>
                <ListGroup.Item className="d-flex align-items-center">
                  <h5 className="m-2 p-1">Ethnic</h5>
                  <Button
                    style={{ minWidth: "50px" }}
                    variant="light" // Adjust width as needed
                    onClick={() => {
                      setOpenOuterModal(true);
                    }}
                  >
                    +
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="">
                  <Accord heading={headings[0]} outfits={outfits[0]} />
                  <Accord heading={headings[1]} outfits={outfits[1]} />
                  <Accord heading={headings[2]} outfits={outfits[2]} />
                  <Accord heading={headings[3]} outfits={outfits[3]} />
                  <Accord heading={headings[4]} outfits={outfits[4]} />
                </ListGroup.Item>
              </ListGroup>
              <Button
                className="m-4"
                size="lg"
                onClick={handleNext}
                style={{
                  backgroundColor: "#6E41E7",
                  borderRadius: "30px",
                  width: "100px",
                  float: "right",
                }}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Ethnic;
