import { USER } from "../actiontypes/actiontypes";

export const saveUser = (value) => {
  return {
    type: USER,
    payload: value
  };
};
