import constants from "./../constants";

const { defaultState, types } = constants;

const profileReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case types.REQUEST_REPO:
      newState = {
        isFetching: true,
        repos: []
      };
      return newState;
    case types.RECEIVE_REPO:
      newState = {
        isFetching: false,
        repos: action.starred
        };
      return newState;
    case types.HIDE_REPOS:
      newState = {
        isFetching: false,
        repos: []
      }
      return newState;
    default:
      return state;
  }
}

export default profileReducer;
