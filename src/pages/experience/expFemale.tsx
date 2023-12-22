import React from "react";
import { Table, Button } from "react-bootstrap";
import IncrementDecrement from "../../components/IncrementDecrement";

const ExpFemale = () => {
  const [showIncrementDecrement, setShowIncrementDecrement] =
    React.useState(false);

  const [show, setShow] = React.useState(false);

  const handleNext = () => {
    alert("ok");
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="container d-flex mb-5">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/human-experience-3588184-3055939.png"
            // src="https://cdn-icons-png.flaticon.com/512/4185/4185277.png"
            alt="exp"
            height="50px"
            width="50px"
          />
          <div className="h1 ms-2">Experience (Female)</div>
        </div>
        {/* <div className="h3" style={{ marginLeft: "60px" }}>
          Enter your experience below :
        </div> */}
        <div className="container">
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td className="h6">
                  Total Experience in Female stitching<p>(years)</p>
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

export default ExpFemale;
