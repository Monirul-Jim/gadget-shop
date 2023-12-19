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
import ManageOrderedProducts from "../Dashboard/ManageOrderedProducts/ManageOrderedProducts";
import SellerHome from "../Dashboard/SellerHome/SellerHome";
import UserHome from "../Dashboard/UserHome/UserHome";
import UserOrderedItem from "../Dashboard/UserOrderedItem/UserOrderedItem";
import ShowAllProduct from "../components/ShowAllProduct/ShowAllProduct";
import UpdateInfoProduct from "../Dashboard/UpdateInfoProduct/UpdateInfoProduct";
import EditProduct from "../Dashboard/UpdateInfoProduct/EditProduct/EditProduct";
import ProceedOrder from "../components/OrderItemReview/ProceedOrder";

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
      element: <LoginAuth />
    },
    {
      path: '/register',
      element: <RegisterAuth />
    },
    {
      path: '/add-product',
      element: <AddProducts />
    },
    {
      path: '/order-item-review',
      element: <OrderItemReview />
    },
    {
      path: '/proceed-order',
      element: <ProceedOrder />
    },
    {
      path: '/show-all-products',
      element: <ShowAllProduct />
    },
    {
      path: '/product/:id',
      element: <Product />
    },
    {
      path: '/single-product/:id',
      element: <BuyNow />,
      loader: ({ params }) => fetch(`https://gadget-shop-server.vercel.app/unique-product/${params.id}`)
    },
    {
      path: '/seller-update-product-id/:id',
      element: <EditProduct />,
      loader: ({ params }) => fetch(`https://gadget-shop-server.vercel.app/seller-update-product/${params.id}`)
    }

    ]
  },
  {
    path: 'dashboard-for-all',
    element: <DashboardMenu />,
    children: [
      {
        path: 'all-user-collection',
        element: <AdminRoutes><AllUsers /></AdminRoutes>
      },
      {
        path: 'userHome',
        element: <UserHome />
      },
      {
        path: 'userOrderedItem',
        element: <UserOrderedItem />
      },
      {
        path: 'sellerHome',
        element: <SellerHome />
      },
      {
        path: 'addProduct',
        element: <AddProducts />
      },
      {
        path: 'manageOrderedProducts',
        element: <ManageOrderedProducts />
      },
      {
        path: 'update-product-info',
        element: <UpdateInfoProduct />
      }
    ]
  }

]);
export default router;