import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
      <h1 className="text-3xl font-semibold text-center mt-3 text-green-600">Dashboard</h1>
      <Outlet />
      
        {/* <!-- Page content here --> */}
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open Drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Dashboard</Link>   
          </li>
          
          <li>
            <Link to="/dashboard/addareview">Add a Review</Link>
          </li>
          <li>
            <Link to="/dashboard/allusers">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
