import userTypes from "./user.types";
import { auth, handleUserProfile } from "./../../firebase/utils";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const signUpUser =
  ({ email, password, confirmPassword, displayName }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      const err = ["Passwords do not match"];
      dispatch({
        type: userTypes.SIGN_UP_ERROR,
        payload: err,
      });
      return;
    } else if (password.length < 4) {
      const err = ["Password must be longer than 4 characters"];
      dispatch({
        type: userTypes.SIGN_UP_ERROR,
        payload: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      dispatch({
        type: userTypes.SIGN_UP_SUCCESS,
        payload: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
