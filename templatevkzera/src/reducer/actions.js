import * as types from "./types";
import axios from "axios";
//root para navegação
import NavigationService from "../services/NavigationService";

//loading splashscreen
export const loadingSplashScreenComplete = () => {
  return dispatch => {
    dispatch({
      type: types.LOADING_SPLASH_SCREEN_COMPLETE
    });
  };
};
