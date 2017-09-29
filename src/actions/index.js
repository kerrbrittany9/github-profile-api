import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestRepo = (profileSearch, profileId) => ({
  type: types.REQUEST_REPO,
  profileSearch,
  profileId: profileId
});

export const displayRepo = (profile, profileSearch, profileId) => ({
  type: types.DISPLAY_REPO,
  profile,
  profileSearch,
  profileId
});

export function fetchRepo(profileSearch) {
  return function (dispatch) {
    const profileId = v4();
    dispatch(requestRepo(profileSearch, profileId));
    return fetch("https://api.github.com/users/kerrbrittany9/repos")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      if (json.status === "success") {
        const dog = json.message[0];
        dispatch(displayRepo(profile, profileSearch, profileId));
      } else {
        error => console.log("An error occurred.", error)
        dispatch(displayDog(profile, profileSearch, profileId));
      }
    });
  };
}
