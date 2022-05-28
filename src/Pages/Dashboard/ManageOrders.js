import React from "react";
import useOrders from "../../Hooks/useOrders";
import "./ManageAllProducts.css";

const ManageOrders = () => {
  const [orders, setOrders] = useOrders();

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete the product?"
    );
    if (proceed) {
      const url = `https://lit-brook-67654.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((o) => o._id !== id);
          setOrders(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="mb-1 mt-4 text-center text-xl font-bold">Manage Orders</h2>
      <h4 className="font-semibold">Total Orders: {orders.length} </h4>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>User's Email</th>
            </tr>
          </thead>

          {orders.map((o, index) => (
            <tbody>
              <th>{index + 1}</th>
              <td className="text-xs font-bold">{o.productName}</td>
              <td>{o.productQuantity}</td>
              <td>{o.customerEmail}</td>
              <td>
                <button
                  // style={{ width: "" }}
                  className="btn btn-xs border-0 bg-red-300 hover:bg-red-400 text-black "
                  onClick={() => handleDelete(o._id)}
                >
                  Delete Item
                </button>
              </td>
              <td>
                <button
                  // onClick={() => handleDelete(o._id)}
                  class="btn btn-xs border-0 bg-red-300 hover:bg-red-400 text-black"
                >
                  Remove User
                </button>
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
