import * as types from "./types";
import { createStore } from "redux";

const INITIAL_STATE = {
  loadingSplashScreen: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //load splashscreen
    case types.LOADING_SPLASH_SCREEN_COMPLETE: {
      return {
        ...state,
        loadingSplashScreen: false
      };
    }
    default:
      return state;
  }
};
