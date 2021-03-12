import { TOGGLE_PRIORITY } from "../types/types";

export default function priorityAction(id) {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_PRIORITY, payload:  id  });
  };
}
