import React, { useState, useEffect } from "react";
import UsersTable from "../UsersTable";
import Nav from "../Nav";
import API from "../../utils/API";
import "./Users.css";
import UsersContext from "../../utils/UsersContext";

const Users = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "ascend",
    filteredUsers: [],
    headings: [
      { name: "Name", width: "7%" },
      { name: "Username", width: "7%" },
      { name: "Image", width: "1%" },
      { name: "Phone", width: "3%" },
      { name: "Email", width: "7%" },
      { name: "Location", width: "7%" },
    ],
  });

  const sorter = (heading) => {
    if (developerState.order === "descend") {
      setDeveloperState({
        order: "ascend",
      });
    } else {
      setDeveloperState({
        order: "descend",
      });
    }

    const comparison = (a, b) => {
      if (developerState.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(comparison);

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
    });
  };

  const filterChange = (event) => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: filteredList,
    });
  };

  useEffect(() => {
    API.showUsers().then((results) => {
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }, []);

  return (
    <UsersContext.Provider value={{ developerState, filterChange, sorter }}>
      <Nav />
      <div className="users">
        {developerState.filteredUsers.length > 0 ? <UsersTable /> : <div></div>}
      </div>
    </UsersContext.Provider>
  );
};

export default Users;
