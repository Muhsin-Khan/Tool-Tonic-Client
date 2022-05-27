import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user }) => {
  const { email, role, index } = user;
  const makeAdmin = () => {
    fetch(`https://lit-brook-67654.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`Admin has been made sucessfully`);
      });
  };
  return (
    <tr>
      <th>{1}</th>
      <td>{email}</td>
      
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
