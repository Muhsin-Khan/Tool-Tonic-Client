import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customerEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }
  }, [user]);
  return (
    <div>
      <h1 className="text-lg text-center my-3 font-semibold">
        My Total Orders : {order.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Product Name</th>
              {/* <th>Ordered ID</th> */}
              <th>Orderd Quantity</th>
              <th>Customer's Email</th>
              <th>Make Payment</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td className="text-xs font-bold">{order.productName}</td>
                {/* <td className="text-xs">{o.productId}</td> */}
                <td className=" text-center text-bold ">{order.productQuantity}</td>
                <td>{order.customerEmail}</td>
                <td><button class="btn btn-xs border-0 bg-yellow-500 text-black hover:bg-green-500">Pay</button></td>
                <td><button class="btn btn-xs border-0 bg-red-300 text-black hover:bg-red-500">Cancel Order</button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
