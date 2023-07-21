import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Shared/loginregister/Login/Login";
import Register from "../Shared/loginregister/register/Register";
import AddProducts from "../AdminRoute/AddProduct/AddProducts";
import Product from "../Product/Product/Product";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[{
        path:'/',
        element:<Home></Home>,
        
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/add-product',
        element:<AddProducts></AddProducts>
      },
      {
        path:'/product/:id',
        element:<Product></Product>
      }

    ]
    },

  ]);
export default router;