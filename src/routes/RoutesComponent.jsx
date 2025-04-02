import { Route,  BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
