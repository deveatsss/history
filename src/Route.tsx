import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

const BaseRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default BaseRoute;
