import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./Pages/All Products/AllProducts/AllProducts";
import Blogs from "./Pages/Blogs/Blogs";
import AddaReview from "./Pages/Dashboard/AddaReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Logins/Login/Login";
import SignUp from "./Pages/Logins/SignUp/SignUp";
import MyPortfolio from "./Pages/My Portfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Shared/Loading/RequireAdmin";
import AddaProduct from "./Pages/Dashboard/AddaProduct";
import ManageAllProducts from "./Pages/Dashboard/ManageAllProducts";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AllReview from "./Pages/Dashboard/AllReview";

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/allproducts"
          element={
            <RequireAuth>
              <AllProducts></AllProducts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        {/* Nestde Routes */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index  element={<MyProfile></MyProfile>} />
          <Route path="myprofile" element={<MyProfile></MyProfile>} />
          <Route path="myorders" element={<MyOrders></MyOrders>} />
          <Route path="addareview" element={<AddaReview></AddaReview>} />
          <Route path="allusers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} />
          <Route path="addaproduct" element={<RequireAdmin><AddaProduct></AddaProduct></RequireAdmin>} />
          <Route path="manageproducts" element={<RequireAdmin><ManageAllProducts></ManageAllProducts></RequireAdmin>} />
          <Route path="manageorders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>} />
          
          
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        {/* <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route> */}
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
