import * as types from "./../constants/ActionTypes";

export const requestRepo = () => ({
  type: types.REQUEST_REPO,
});

export const receiveRepo = (starred) => ({
  type: types.RECEIVE_REPO,
    starred
});

export function fetchRepo() {
  return function (dispatch) {
    dispatch(requestRepo());
    return fetch("https://api.github.com/users/kerrbrittany9/starred")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      var starred = [];
      for(var i = 0; i < json.length; i++) {
       let name = (json[i].name);
       let url = (json[i].html_url);
        const allStarred = {
          name: name,
          url: url
        }
      starred.push(allStarred)
      }
      dispatch(receiveRepo(starred));
    });
  }
}
