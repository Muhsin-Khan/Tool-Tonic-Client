import React from 'react'
import { toast } from 'react-toastify';

const UserRow = ({user}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success(`Admin has been made sucessfully`);
        })
    }
  return (
    <tr>
          <th>{1}</th>
          <td>{email}</td>
          {/* <td>{_id}</td> */}
          <td>{role !== 'admin' &&<button onClick={makeAdmin}  class="btn btn-xs">Make Admin</button>}</td>
          <td><button class="btn btn-xs">Remove User</button></td>
          
          
        </tr> 
  )
}

export default UserRow
