import { DELETE } from "../types/types";


export default function deleteAction(id) {
  return async (dispatch) => {

     dispatch({ type: DELETE, payload: id });
  };
}
