import React from "react";

import { useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment_counter" })}>
        increment counter
      </button>
      <div>Count:</div>
    </div>
  );
};

export default Users;
