import React from "react";
import AllRoutes from "./routes/allRoutes";
import "./assets/scss/Theme.scss";
import "./constants/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <React.Fragment>
        <AllRoutes />
      </React.Fragment>
    </>
  );
};

export default App;
