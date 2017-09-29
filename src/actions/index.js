import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const requestRepo = (profileId) => ({
  type: types.REQUEST_REPO,
  profileId: profileId
});

export const displayRepo = (name, html, profileId) => ({
  type: types.DISPLAY_REPO,
  name,
  html,
  profileId
});

export function fetchRepo(dispatch) {
  return function (dispatch) {
    const profileId = v4();
    dispatch(requestRepo(profileId));
    return fetch("https://api.github.com/users/kerrbrittany9/starred")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      console.log(json);
      const name = json.name;
      const html = json.html_url;
      dispatch(displayRepo(name, html, profileId));
    })
  };
}
