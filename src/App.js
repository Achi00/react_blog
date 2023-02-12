import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import './App.css';
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
    <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>
      <Route path="/create" element={<CreatePost isAuth={isAuth} />}/>
    </Routes>
    </>
  );
}

export default App;
