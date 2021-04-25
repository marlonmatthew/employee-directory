import React, { useContext } from "react";
import UsersContext from "../../utils/UsersContext";

const FilterNames = () => {
  const context = useContext(UsersContext);

  return (
    <div>
      <form className="form">
        <input
          className="form-control"
          type="search"
          placeholder="Filter names"
          aria-label="Filter"
          onChange={(e) => context.filterChange(e)}
        />
      </form>
      <p>Click on Name column to arrange alphabetically.</p>
    </div>
  );
};
export default FilterNames;
