import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
      <h1 className="text-3xl font-semibold text-center mt-3 text-green-600 bg-slate-200 p-5 rounded-t-xl">Dashboard</h1>
      <Outlet />
      
        {/* <!-- Page content here --> */}
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open the Drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Dashboard</Link>
            <Link to="/dashboard/myprofile">My Profile</Link>
            
          </li>
          
          <li>
          { !admin && <Link to="/dashboard/myorders">My Orders</Link>}
          { !admin && <Link to="/dashboard/addareview">Add a Review</Link>}
          </li>
          <li>
            { admin && <Link to="/dashboard/allusers">All Users</Link>}
            { admin && <Link to="/dashboard/addaproduct">Add a Product</Link>}
            { admin && <Link to="/dashboard/manageproducts">Manage Products</Link>}
            { admin && <Link to="/dashboard/manageorders">Manage Orders</Link>}
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
