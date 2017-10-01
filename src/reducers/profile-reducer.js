import constants from "./../constants";

const { defaultState, types } = constants;

const profileReducer = (state = [], action) => {
  let newProfile;
  let newState;
  switch (action.type) {
    case types.REQUEST_REPO:
      newProfile = {
        isFetching: true,
        profileId: action.profileId
      };
      newState = Object.assign({}, state, {[action.profileId]: newProfile
      });
      return newState;
    case types.DISPLAY_REPO:
      newProfile = Object.assign({}, {
        isFetching: false,
        starred: action.starred
      })
      newState = Object.assign({}, state, {[action.starred]: newProfile });
      return newState;
    default:
      return state;
  }
}

export default profileReducer;
