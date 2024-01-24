import React from "react";
import {Route, Routes} from "react-router-dom"
import Squad from "./Components/Home";
import Contacts from "./Components/ContactUs";
import About from "./Components/About";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Squad />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
        
        </>
    )
}

export default AllRoutes;