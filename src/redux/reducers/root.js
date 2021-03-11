import { SET_TODO, DELETE, EDIT } from "../types/types";
const initial = [];

export default function reducer(state = initial, { type, payload }) {
  switch (type) {
    case SET_TODO:
      return [...state, payload];
    case DELETE:
      return [...state.filter((item) => item.id !== payload)];
    case EDIT:
      return [
        ...state.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                name: payload.name,
              }
            : item
        ),
      ];
    default:
      return state;
  }
}
