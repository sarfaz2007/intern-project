import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import AccessControlPage from "./pages/AccessControlpage";
import "./index.css";
import Dashboard from "./components/layouts/Dashboard";
import Leads from "./components/layouts/Leads";
import JobRegister from "./pages/JobRegister";
import Popupmodal from "./components/Popupmodal";
import Branches from "./components/layouts/Branches";
import ServiceCharge from "./components/layouts/ServiceCharge";
import ExclusiveInsights from "./components/layouts/ExclusiceInsights";
import IncentivePayout from "./components/layouts/IncentivePayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/leads",
        element: <Leads />
      },
      {
        path: "/branches",
        element: <Branches/>
      },
      {
        path: "/servicecharge",
        element: <ServiceCharge/>
      },
      {
        path: "/servicecharge",
        element: <ServiceCharge/>
      },
      {
        path: "/exclusiveinsights",
        element: <ExclusiveInsights/>
      },
      {
        path: "/incentivepayouts",
        element: <IncentivePayout/>
      },

    ]
  },
  {
    path: "/access-portal",
    element: <AccessControlPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/registerjob",
    element: <JobRegister/>
  },
  {
    path: "/jobentry",
    element: <Popupmodal/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
