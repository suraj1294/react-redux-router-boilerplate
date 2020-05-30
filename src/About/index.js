import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  /*GET_ABOUT_DETAILS,*/ getDetails,
} from "./store/actions/about.actions";

const About = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.aboutApp);

  console.log(store);
  return (
    <div>
      <button onClick={() => dispatch(getDetails())}>Get Details</button>
      <div>Details:</div>
      {store &&
        store.details &&
        store.details.map((detail) => {
          return <div key={detail.id}> {detail.title} </div>;
        })}
    </div>
  );
};

export default About;
