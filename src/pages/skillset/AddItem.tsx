import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Image, Button } from "react-bootstrap";
import QuillEditor from "../../components/QuillEditor";

const AddItem = () => {
  const [selectedImages, setSelectedImages] = React.useState<string[]>([]);
  const [code, setCode] = useState();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imagesArray: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          if (event.target && event.target.result) {
            const result = event.target.result as string;
            imagesArray.push(result);
            if (imagesArray.length === files.length) {
              setSelectedImages(imagesArray);
            }
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  return (
    <div>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3 text-muted"
      >
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>

      <Form.Check
        inline
        label="isComponent"
        name="group1"
        type="radio"
        id="radiobutton1"
        className="mb-3"
      />
      <Form.Check
        inline
        label="isPackage"
        name="group2"
        type="radio"
        id="radiobutton2"
        className="mb-3"
      />
      <div style={{ marginBottom: "85px" }} className="h6">
        <QuillEditor code={code} setCode={setCode} />
      </div>

      <FloatingLabel
        controlId="floatingInput"
        label="Price in Rs."
        className="mb-3 text-muted"
      >
        <Form.Control type="text" placeholder="Price" />
      </FloatingLabel>

      <div>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Sample Pictures</Form.Label>
            <Form.Control type="file" multiple onChange={handleImageChange} />
          </Form.Group>
        </Form>

        {selectedImages && selectedImages.length > 0 && (
          <div>
            {selectedImages.map((image, index) => (
              <div key={index} className="d-inline me-1">
                <Image
                  src={image}
                  alt={`Image ${index}`}
                  width="150"
                  height="150"
                  className="mb-3"
                />
              </div>
            ))}
          </div>
        )}
        {/* <Button variant="primary" className="mt-3 mb-3">
          Upload pictures
        </Button> */}
      </div>
      <FloatingLabel
        controlId="floatingInput"
        label="Delivery in days"
        className="mb-3 text-muted"
      >
        <Form.Control type="text" placeholder="Delivery in days" />
      </FloatingLabel>
      <div className="" style={{ margin: "auto" }}>
        <Button
          variant="primary"
          className=""
          style={{
            backgroundColor: "#6E41E7",
            borderRadius: "30px",
            width: "100px",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddItem;
