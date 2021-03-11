import { GET_DATA } from "../types/types";
import cardsArray from '../../models/card';

export default function getFromDBAction() {
  return async (dispatch) => {
    dispatch({ type: GET_DATA, payload: cardsArray});
  };
}
