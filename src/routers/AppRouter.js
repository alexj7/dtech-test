import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/organism/NavBar/NavBar";
import { DashboardScreen } from "../pages/dashboard/DashboardScreen";
import { LoginScreen } from "../pages/login/LoginScreen";
import { RegisterScreen } from "../pages/register/RegisterScreen";

export const AppRouter = () => {
    const logged = true

    return (
        <Router>

            {logged ? <NavBar /> : null}

            <Routes>
                {/* AUTH PUBLIC */}
                <Route exact path='/login' element={!logged ? <LoginScreen /> : <Navigate to='/' />} />
                <Route exact path='/register' element={!logged ? <RegisterScreen /> : <Navigate to='/' />} />


                {/* PRIVATE LOGGED */}
                <Route exact path='/' element={logged ? <DashboardScreen /> : <Navigate to='/login' />} />
            </Routes>

        </Router>
    )

}
