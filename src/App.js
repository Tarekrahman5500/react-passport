import './App.css';
import Navbar from "./components/navbar";
import Login from "./pages/Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/post";
import NotFound from "./pages/NotFound";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [user, setUser] = useState(null)
    useEffect(() => {

        const getUser = () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject.user);
                    console.log(user)
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();

    }, [])
    console.log(user)
    return (
        <BrowserRouter>
            <div>
                <Navbar user={user}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route index element={<Home/>}/>
                    <Route
                        path="/login"
                        element={user ? <Navigate to="/"/> : <Login/>}/>
                    <Route path="/post/:id" element={user ? <Post/> : <Navigate to="/login"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
