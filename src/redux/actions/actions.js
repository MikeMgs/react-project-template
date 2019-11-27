import { EXAMPLE } from "../actionTypes";

export const example = content => ({
  type: EXAMPLE,
  payload: {
    content
  }
});
