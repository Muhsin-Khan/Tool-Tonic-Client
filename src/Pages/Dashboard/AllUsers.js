import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const { data: users, isLoading} = useQuery("users", () =>
    fetch("https://lit-brook-67654.herokuapp.com/user").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-lg text-center my-4 font-bold">
        Total user: {users.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>User's Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
