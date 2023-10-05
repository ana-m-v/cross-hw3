// tbd

import {
  SET_POSITION,
  TOGGLE_ISS_LOCATION,
  TOGGLE_USER_LOCATION,
  SET_HUMANS,
  SET_NAME,
  SET_ADDRESS,
  SET_EMAIL,
  SET_PASSWORD,
  SET_PROFILE_PICTURE,
} from "../store/types";

interface AppState {
  humans: string[];
  loading: boolean;
  showData: boolean;
  position: { lat: number; lng: number } | null;
  showIssLocation: boolean;
  showUserLocation: boolean;
  name: string;
  address: string;
  email: string;
  password: string;
  profilePicture: string;
}

const initialState: AppState = {
  humans: [],
  loading: false,
  showData: true,
  position: null,
  showIssLocation: true,
  showUserLocation: true,
  name: "",
  address: "",
  email: "",
  password: "",
  profilePicture: "",
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_HUMANS:
      return {
        ...state,
        humans: action.payload,
      };
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    case TOGGLE_ISS_LOCATION:
      return {
        ...state,
        showIssLocation: action.payload,
      };
    case TOGGLE_USER_LOCATION:
      return {
        ...state,
        showUserLocation: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_PROFILE_PICTURE:
      return {
        ...state,
        profilePicture: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
