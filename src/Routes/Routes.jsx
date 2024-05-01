import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/Book/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:"/",
            element: <Home/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/signUp",
          element:<SignUp/>
        },
        {
          path:"/bookService/:id",
          element: <BookService/>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path:"/bookings",
          element: <PrivateRoutes><Bookings/></PrivateRoutes>
        }
        
      ]
    },
  ]);


  export default router;

  