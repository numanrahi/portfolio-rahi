import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Layout/Home";
import { ToastContainer } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import NavbarSkills from "./components/NavbarRoutes/NavbarSkills/NavbarSkills";
import NavbarProjects from "./components/NavbarRoutes/NavbarProjects/NavbarProjects";
import NavbarContact from "./components/NavbarRoutes/NavbarContact/NavbarContact";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "skills",
    element: <NavbarSkills></NavbarSkills>,
  },
  {
    path: "my-project",
    element: <NavbarProjects></NavbarProjects>
  },
  {
    path: 'contact',
    element:<NavbarContact></NavbarContact>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ToastContainer> */}
    <RouterProvider router={router} />
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "black",
      }}
      outerStyle={{
        border: "3px solid black",
      }}
    />
    <ToastContainer />
  </React.StrictMode>
);
