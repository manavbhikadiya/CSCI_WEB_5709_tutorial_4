import { USER } from "../actiontypes/actiontypes";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

const saveUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
      };
    default:
      return state;
  }
};

export default saveUserReducer;
