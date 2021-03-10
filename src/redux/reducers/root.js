import { SET_TODO } from "../types/types";
import { DELETE } from "../types/types";
const initial = [];

export default function reducer(state = initial, { type, payload }) {
  switch (type) {
      case SET_TODO:
      return [...state, payload];
        default:
      return state;
  }
}
