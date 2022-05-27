import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(
        `https://lit-brook-67654.herokuapp.com/order?customerEmail=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <h1 className="text-lg text-center my-3 font-semibold">
        My Total Orders : {orders.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Product Name</th>
              <th>Ordered ID</th>
              <th>Orderd Quantity</th>
              <th>Customer's Email</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td className="text-xs font-bold">{o.productName}</td>
                <td className="text-xs">{o.productId}</td>
                <td className=" text-center text-bold ">{o.productQuantity}</td>
                <td>{o.customerEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
