import React from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import Basics from "./components/Basics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Children from "./components/Children";
import Hooks from "./components/Hooks";
import PostForm from "./components/PostForm";
import NavBar from "./components/NavBar";
import RajeshForm from "./components/RajeshForm";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hooks />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/post-form" element={<PostForm />} />
          <Route path="/rajesh-form" element={<RajeshForm />} />
        
    
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
