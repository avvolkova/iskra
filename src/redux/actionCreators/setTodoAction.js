import { SET_TODO } from "../types/types";


export default function setTodoAction(value) {
  return async (dispatch) => {
     dispatch({ type: SET_TODO, payload: value });
  };
}
