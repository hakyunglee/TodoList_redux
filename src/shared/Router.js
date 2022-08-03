import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "../pages/Detail";
import Layout from "../layout/Layout";
import React from "react";

const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={< Layout />} />
            <Route path="/detail/:id" element={< Detail />} />
            
        </Routes>  
    </BrowserRouter>
}

export { Router };
