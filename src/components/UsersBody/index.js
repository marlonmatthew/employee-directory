import React, { useContext } from "react";
import "./UsersBody.css";
import UsersContext from "../../utils/UsersContext";

const UsersBody = () => {
  const context = useContext(UsersContext);

  return (
    <tbody>
      {context.developerState.filteredUsers[0] !== undefined &&
      context.developerState.filteredUsers[0].name !== undefined ? (
        context.developerState.filteredUsers.map(
          ({ login, name, picture, phone, email, location }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image">
                  <img src={picture.thumbnail} />
                </td>
                <td data-th="Username">{login.username}</td>
                <td data-th="Name" className="sorting">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone">{phone}</td>
                <td data-th="Email">{email}</td>
                <td data-th="Location">
                  {location.city}, {location.state}
                </td>
              </tr>
            );
          }
        )
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default UsersBody;
