import React, { useState } from "react";
import {
  ListGroup,
  Container,
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

const Western = () => {
  const navigate = useNavigate();
  const skillsList = ["Ethnic", "Western", "Casual", "more"];

  const headings = [
    "A-Line",
    "Bodycon",
    "Midi ",
    "Peplum",
    "Sheath Dress ",
    "Off-Shoulder",
    " Cocktail Dress",
  ];
  const outfits = [
    ["Bodice", "Flared Skirt", "Pleated Skirt"],
    ["Sleeveless", "Long Sleeves"],
    ["Below the Knee", "Mid-Calf", "Straight", "Asymmetrical"],
    ["Flared Peplum", "Mermaid Peplum", "Cropped Peplum"],
    ["V-neck", "Square Neck"],
  ];

  const sample =
    "https://thumbs.dreamstime.com/z/sewing-machine-cartoon-illustration-isolated-image-59013916.jpg";

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
        <div className="d-flex m-5">
          <img
            src="https://cdn3.iconfinder.com/data/icons/work-skills-1/64/motivation_skills_practice_wellness_balance-512.png"
            alt="skillset"
            width="50px"
            height="50p%x"
            className="
            "
          />
          <div className="h1">SkillSet</div>
        </div>
        <Row className="m-5">
          <Col sm={1} className="d-flex flex-column align-items-start">
            <ListGroup>
              {skillsList.map((skill, index) => (
                <ListGroup.Item key={index}>
                  <Link
                    to={`/${skill.toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={sample}
                      alt="ethnic"
                      width="40px"
                      height="40px"
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
                <h5 className="m-2 p-1">Western</h5>
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
            <Button className="m-4" onClick={handleNext}>
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Western;
