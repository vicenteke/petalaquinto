import React from "react"
import {
    Routes,
    Route
} from 'react-router-dom';

import Home from "../pages/Home";
import Music from "../pages/Music";
import About from "../pages/About";


export default function MainContent() {

    return (
        <div id="main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musica" element={<Music />} />
            <Route path="/sobre" element={<About />} />
        </Routes>
        </div>
    );
}
