import React from "react";
import { Table, Button } from "react-bootstrap";
import IncrementDecrement from "../../components/IncrementDecrement";
import { useNavigate } from "react-router-dom";

const ExpMale = () => {
  const [showIncrementDecrement, setShowIncrementDecrement] =
    React.useState(false);

  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/ethnic");
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="container d-flex mb-5">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/human-experience-3588184-3055939.png"
            alt="exp"
            height="60px"
            width="60px"
          />
          <div className="h1 m-2">Experience (Male)</div>
        </div>
        {/* <div className="h3 m-5">Enter your experience below :</div> */}
        <div className="container">
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td className="h6">
                  Total Experience in male stitching<p>(years)</p>
                </td>
                <td>{<IncrementDecrement />}</td>
              </tr>
              <tr>
                <td className="h6">
                  Ethnic wear stitching<p>(years)</p>
                </td>
                <td>
                  <Button
                    variant="light"
                    onClick={() =>
                      setShowIncrementDecrement(!showIncrementDecrement)
                    }
                  >
                    Add
                  </Button>
                  {showIncrementDecrement ? <IncrementDecrement /> : null}
                </td>
              </tr>
              <tr>
                <td className="h6">
                  Western wear stitching<p>(years)</p>
                </td>
                <td>
                  <Button variant="light" onClick={() => setShow(!show)}>
                    Add
                  </Button>
                  {show ? <IncrementDecrement /> : null}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="next-btn">
          <Button
            type="button"
            className="btn-lg m-2"
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
      </div>
    </>
  );
};

export default ExpMale;
