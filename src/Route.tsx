import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

const BaseRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default BaseRoute;
