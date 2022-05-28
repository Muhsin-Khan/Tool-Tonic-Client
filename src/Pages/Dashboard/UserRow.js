import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user,index }) => {
  const { email, role} = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
    })
      .then(res => {
        if(res.status === 403){
          toast.error('Failed to Make Admin');
        }
        return res.json()})
      .then(data => {
        if(data.modifiedCount > 0){
          console.log(data);
          toast.success(`Admin has been made sucessfully`);
          
        }
        
      });
  };
  return (
    <tr>
      <th>{index}</th>
      <td>{email}</td>

      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs border-0 bg-yellow-500 text-black hover:bg-green-500">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs border-0 bg-red-300 hover:bg-red-400 text-black">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
