// tbd..

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
} from "./types";

export interface SetPositionAction {
  type: typeof SET_POSITION;
  payload: { lat: number; lng: number };
}

export interface ToggleIssLocationAction {
  type: typeof TOGGLE_ISS_LOCATION;
  payload: boolean;
}

export interface ToggleUserLocationAction {
  type: typeof TOGGLE_USER_LOCATION;
  payload: boolean;
}

export type ActionTypes =
  | SetPositionAction
  | ToggleIssLocationAction
  | ToggleUserLocationAction;

export const setPosition = (position: {
  lat: number;
  lng: number;
}): SetPositionAction => ({
  type: SET_POSITION,
  payload: position,
});

export const toggleIssLocation = (show: boolean): ToggleIssLocationAction => ({
  type: TOGGLE_ISS_LOCATION,
  payload: show,
});

export const toggleUserLocation = (
  show: boolean
): ToggleUserLocationAction => ({
  type: TOGGLE_USER_LOCATION,
  payload: show,
});

export const setHumans = (humans: string[]) => {
  return {
    type: SET_HUMANS,
    payload: humans,
  };
};

export const setName = (name: string) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

export const setAddress = (address: string) => {
  return {
    type: SET_ADDRESS,
    payload: address,
  };
};

export const setEmail = (email: string) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setPassword = (password: string) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const setProfilePicture = (picture: string) => {
  return {
    type: SET_PROFILE_PICTURE,
    payload: picture,
  };
};
