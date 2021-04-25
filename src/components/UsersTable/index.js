import React, { useContext } from "react";
import UsersBody from "../UsersBody";
import "./UsersTable.css";
import UsersContext from "../../utils/UsersContext";

const UsersTable = () => {
  const context = useContext(UsersContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.sorter(name.toLowerCase());
                  }}
                >
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>

        <UsersBody />
      </table>
    </div>
  );
};

export default UsersTable;
