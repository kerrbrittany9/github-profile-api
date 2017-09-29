import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const requestRepo = (profileId) => ({
  type: types.REQUEST_REPO,
  profileId: profileId
});

export const displayRepo = (profile, profileId) => ({
  type: types.DISPLAY_REPO,
  profile,
  profileId
});

export function fetchRepo(dispatch) {
  return function (dispatch) {
    let profile;
    const profileId = v4();
    dispatch(requestRepo(profileId));
    return fetch("https://api.github.com/users/kerrbrittany9/starred")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      if (json.status === "success") {
        const profile = json.name;
        dispatch(displayRepo(profile, profileId));
      }
    });
  };
}
