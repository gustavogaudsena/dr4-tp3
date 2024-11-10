import Home from "../views/home";
import SignIn from "../views/signIn";
import SignUp from "../views/signUp";
import Settings from "../views/settings";
import Dashboard from "../views/dashboard";
import Form from "../views/form";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Protected from "./protected";
import authenticator from "../services/authenticator";
import React from "react";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Protected />}>
                <Route index element={<Home />} loader={authenticator.handleProtected} />
                <Route path="settings" element={<Settings />} loader={authenticator.handleProtected} />
                <Route path="dashboard" element={<Dashboard />} loader={authenticator.isAuthenticated} />
                <Route path="new/:type" element={<Form />} loader={authenticator.isAuthenticated} />
                <Route path=":type/:id" element={<Form />} loader={authenticator.isAuthenticated} />
            </Route>
            <Route path="signin" element={<SignIn />} loader={authenticator.isAuthenticated} />
            <Route path="signup" element={<SignUp />} loader={authenticator.isAuthenticated} />
        </Route>

    )
);

const Router: React.FC = () => {
    return <RouterProvider router={router} />
}

export default Router;