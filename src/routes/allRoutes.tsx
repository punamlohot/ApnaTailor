import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import EnterOtp from "../pages/auth/Otp";
import Profile from "../pages/auth/Profile";
import Kyc from "../pages/kyc/kycPage1";
import Kyc2 from "../pages/kyc/kycPage2";
import Kyc3 from "../pages/kyc/kycPage3";
import Experience from "../pages/experience/exp";
import ExpMale from "../pages/experience/expMale";
import ExpFemale from "../pages/experience/expFemale";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Ethnic from "../pages/skillset/Ethnic";
import Western from "../pages/skillset/Western";
import Consultation, {
  ConsultationMode,
} from "../pages/consultation/Consultation";
import Working, { WorkingHome } from "../pages/consultation/Working";

const AllRoutes: React.FC = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {/* <Col sm={3}> */}
          <Sidebar />
          {/* </Col> */}
          <Col sm={12}>
            <Routes>
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/otp" element={<EnterOtp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/kycStep1" element={<Kyc />} />
              <Route path="/kycStep2" element={<Kyc2 />} />
              <Route path="/kycStep3" element={<Kyc3 />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/experience/male" element={<ExpMale />} />
              <Route path="/experience/female" element={<ExpFemale />} />
              <Route path="/ethnic" element={<Ethnic />} />
              <Route path="/western" element={<Western />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/consultationmode" element={<ConsultationMode />} />
              <Route path="/workinghrs-at-shop" element={<Working />} />
              <Route path="/workinghrs-at-home" element={<WorkingHome />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllRoutes;
