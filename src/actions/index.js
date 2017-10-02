import * as types from "./../constants/ActionTypes";
// var apiKey = require('./../../.env').apiKey
import v4 from "uuid/v4";

export const requestRepo = (profileId) => ({
  type: types.REQUEST_REPO,
  profileId: profileId
});

export const displayRepo = (starred) => ({
  type: types.DISPLAY_REPO,
  starred
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
      var starred = [];
      for(var i = 0; i < json.length; i++) {
        const name = json[i].name;
        const html = json[i].html_url;
        const allStarred = {
          name: name,
          html: html,
          profileId: profileId
        }
      starred.push(allStarred)
      }
      dispatch(displayRepo(starred));
      console.log(starred);
    });
  };
}
