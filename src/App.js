import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
     
        </Routes>
      </Router>
    </>
  );
}

export default App;
