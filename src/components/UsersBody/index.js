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
                <td className="sorting">
                  {name.first} {name.last}
                </td>
                <td>{login.username}</td>
                <td>
                  <img src={picture.thumbnail} />
                </td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
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
