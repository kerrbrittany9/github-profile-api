import * as types from "./../constants/ActionTypes";
// var apiKey = require('./../../.env').apiKey
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
    const name = [];
    const html = [];
    const profileId = v4();
    dispatch(requestRepo(profileId));
    return fetch("https://api.github.com/users/kerrbrittany9/starred")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      const profile = json;
      // var starred = [];
      console.log(profileId);
      for(var i = 0; i < json.length; i++) {
        name.push(json[i].name)
        html.push(json[i].html_url);
      //   const allStarred = {
      //     name: name,
      //     html: html,
      //     profileId: profileId
      //   }
      // starred.push(allStarred)
    }
      dispatch(displayRepo(name, html, profileId));
    });
  }
}
