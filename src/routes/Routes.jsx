import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import AddProducts from "../AdminRoute/AddProduct/AddProducts";
import Product from "../Product/Product/Product";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import BuyNow from "../OrderRoute/BuyNow/BuyNow";
import DashboardMenu from "../Dashboard/DashboardMenu/DashboardMenu";
import AllUsers from "../Dashboard/AllUserInfo/AllUsers";
import AdminRoutes from "./AdminRoutes";
import LoginAuth from "../Shared/loginregister/Login/LoginAuth";
import RegisterAuth from "../Shared/loginregister/register/RegisterAuth";
import OrderItemReview from "../components/OrderItemReview/OrderItemReview";

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>,


    },
    {
      path: '/login',
      element: <LoginAuth></LoginAuth>
    },
    {
      path: '/register',
      element: <RegisterAuth></RegisterAuth>
    },
    {
      path: '/add-product',
      element: <AddProducts></AddProducts>
    },
    {
      path: '/order-item-review',
      element: <OrderItemReview></OrderItemReview>
    },
    {
      path: '/product/:id',
      element: <Product></Product>
    },
    {
      path: '/single-product/:id',
      element: <BuyNow></BuyNow>,
      loader: ({ params }) => fetch(`http://localhost:5000/unique-product/${params.id}`)
    }

    ]
  },
  {
    path: 'dashboard-for-all',
    element: <DashboardMenu></DashboardMenu>,
    children: [
      {
        path: 'all-user-collection',
        element: <AdminRoutes><AllUsers /></AdminRoutes>
      }
    ]
  }

]);
export default router;