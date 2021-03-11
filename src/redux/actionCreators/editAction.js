import { EDIT } from "../types/types";

export default function editAction({id, name}) {
  return async (dispatch) => {
    dispatch({ type: EDIT, payload: {id, name} });
  };
}
