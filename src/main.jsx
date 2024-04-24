import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="  bg-white">
   <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
 </div>
);
