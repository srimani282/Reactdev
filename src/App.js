import React from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import Basics from "./components/Basics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Children from "./components/Children";
import Hooks from "./components/Hooks";
import PostForm from "./components/forms/Post/PostForm";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hooks />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/basics" element={<Basics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
