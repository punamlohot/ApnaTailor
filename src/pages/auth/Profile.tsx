import React from "react";
import AuthLayout from "./AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Image } from "react-bootstrap";
// import "../../assets/images"

const Profile = () => {
  const logoProfile =
    "https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-3.jpg";

  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [firstLanguage, setFirstLanguage] = React.useState("");
  const [secondLanguage, setSecondLanguage] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleNext = () => {
    // alert("Success");
    navigate("/kycStep1");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setSelectedImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Add logic to send the image to the server (API call, etc.)
    console.log("Upload logic goes here");
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <AuthLayout>
          <div className="auth-logo mx-auto">
            <Link to="/" className="logo logo-dark text-center">
              <span className="logo-lg">
                <img src={logoProfile} alt="logo" height="70" width="70" />
              </span>
            </Link>
          </div>
          <div className="h3 text-center m-3">Create Profile</div>

          <div className="mb-1">Help us with your location : </div>
          <div className="mb-3 inp">
            <hr></hr>
          </div>

          <div>
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Profile Picture</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>
            </Form>

            {selectedImage && (
              <div>
                <Image
                  src={selectedImage}
                  alt="Profile"
                  width="150"
                  height="150"
                />
              </div>
            )}

            <Button
              variant="primary"
              className="mt-3 mb-3"
              onClick={handleUpload}
              style={{ backgroundColor: "#6E41E7", borderRadius: "30px" }}
            >
              Set As Profile Picture
            </Button>
          </div>

          <div className="mb-1">Full Name : </div>
          <div className="mb-3">
            <input
              className="profile-inp"
              placeholder="Enter full name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-1">Gender : </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option selected>Male</option>
            <option value="1">Female</option>
            <option value="2">Other</option>
          </select>

          <div className="mb-1"> Date of Birth : </div>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            className="mb-3"
            showYearDropdown={true}
          />

          <div className="mb-1">First Language : </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={firstLanguage}
            onChange={(e) => setFirstLanguage(e.target.value)}
          >
            <option selected>English</option>
            <option value="1">Hindi</option>
            <option value="2">Marathi</option>
          </select>

          <div className="mb-1">Second Language : </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={secondLanguage}
            onChange={(e) => setSecondLanguage(e.target.value)}
          >
            <option selected>Hindi</option>
            <option value="1">English</option>
            <option value="2">Marathi</option>
          </select>

          <div className="mb-1">Other Languages : </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option selected>Hindi</option>
            <option value="1">English</option>
            <option value="2">Marathi</option>
          </select>

          <div className="mb-1">Email (Optional) : </div>
          <div className="mb-3">
            <input
              className="profile-inp"
              placeholder="e.g.abcd@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 text-center d-grid">
            <Button
              type="submit"
              onClick={handleNext}
              style={{ backgroundColor: "#6E41E7", borderRadius: "30px" }}
            >
              Next
            </Button>
          </div>
        </AuthLayout>
      </div>
    </>
  );
};

export default Profile;
