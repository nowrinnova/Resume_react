import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import About from "./routes/About.jsx";
import Resume from "./routes/Resume.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
// import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
      children:[{
        path:"home" ,element:<Home/>
      },]
    
  },

  // { path: "home",
  //  element: <Home /> },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },

  {
    path: "resume",
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
