import React, { useState } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Search } from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";
import AddItem from "../pages/skillset/AddItem";
// import { Pencil } from "react-bootstrap-icons";
import { Table } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import EditItem from "../pages/skillset/EditItem";

interface AccordProps {
  heading: string;
  outfits: string[];
}

export const Accord: React.FC<AccordProps> = ({ heading, outfits }) => {
  const [expanded, setExpanded] = useState<string | undefined>(undefined);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleToggle = () => {
    setExpanded((prevExpanded) =>
      prevExpanded === heading ? undefined : heading
    );
  };

  const handleChange = () => {
    setChecked((prevChecked) =>
      prevChecked === "indeterminate" ? false : "indeterminate"
    );
  };

  return (
    <>
      <Accordion defaultActiveKey={expanded} onSelect={handleToggle}>
        <Accordion.Item eventKey={heading}>
          <Accordion.Header>
            <FormControlLabel
              label={heading}
              control={
                <Checkbox
                  indeterminate={checked === "indeterminate"}
                  checked={checked === true}
                  onChange={handleChange}
                />
              }
            />
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex align-items-center justify-content-between">
              <Form className="flex-grow-1 me-2">
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Search for component type"
                    value={searchText}
                    onChange={handleSearchChange}
                  />
                  <InputGroup.Text>
                    <Search />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
              <Button
                style={{
                  backgroundColor: "#6E41E7",
                  borderRadius: "10px",
                  minWidth: "120px",
                  float: "right",
                }} // Adjust width as needed
                onClick={() => {
                  setOpenAddModal(true);
                }}
              >
                Add Item
              </Button>
            </div>
            {outfits.map((outfit, index) => (
              <div className="d-flex m-2" key={index}>
                <label htmlFor={outfit}>{outfit}</label>
                <input
                  type="checkbox"
                  id={outfit}
                  name={outfit}
                  className="m-1"
                />
                <div className="ms-1">
                  {" "}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setOpenEditModal(true)}
                    style={{
                      borderColor: "#6E41E7",
                      color: "#6E41E7",
                      borderRadius: "30px",
                      width: "80px",
                      float: "right",
                    }}
                  >
                    Edit Item
                  </Button>
                </div>
              </div>
            ))}

            <ModalComponent
              openModal={openAddModal}
              setOpenModal={() => setOpenAddModal(false)}
              title="Add Custom Item You Sew"
              body={<AddItem />}
            />
            <ModalComponent
              openModal={openEditModal}
              setOpenModal={() => setOpenEditModal(false)}
              title="Edit Item"
              body={<EditItem />}
            />

            <hr></hr>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Component/Package</td>
                  <td>Price</td>
                  <td>PictureUploaded</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>Package</td>
                  <td>4000</td>
                  <td>2 photos</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Component</td>
                  <td>6000</td>
                  <td>No photos</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>Package</td>
                  <td>2000</td>
                  <td>5 photos</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
