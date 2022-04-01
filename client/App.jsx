import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import ChirpDetails from "./components/ChirpDetails.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/chirpDetails/:id" element = {<ChirpDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
