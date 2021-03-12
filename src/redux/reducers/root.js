import {
  SET_TODO,
  DELETE,
  EDIT,
  GET_DATA,
  SORT_BY_DATE,
  TOGGLE_PRIORITY,
  SORT_BY_PRIORITY
} from "../types/types";
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
    case GET_DATA:
      return payload;
    case SORT_BY_DATE:
      return state.sort(
        (a, b) => new Date(a.createDate) - new Date(b.createDate)
      );
    case TOGGLE_PRIORITY:
      return [
        ...state.map((item) =>
          item.id === payload
            ? {
                ...item,
                priority: !item.priority,
              }
            : item
        ),
      ];
    case SORT_BY_PRIORITY:
      return state.sort(
        (a, b) => b.priority - a.priority
      );
    default:
      return state;
  }
}
