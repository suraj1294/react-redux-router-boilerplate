import axios from "axios";
import { showPageLoader, hidePageLoader } from "../../../utils";
export const GET_ABOUT_DETAILS = "GET-ABOUT-DETAILS";

export const getDetails = () => {
  console.log("get details action dispatched!");
  return (dispatch) => {
    showPageLoader();
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      dispatch({
        type: GET_ABOUT_DETAILS,
        payload: res.data,
      });
      hidePageLoader();
    });
  };
};
