import constants from "./../constants";

const { defaultState, types } = constants;

const reposById = (state = defaultState, action) => {
  let profile;
  let newProfile;
  let newState;
  switch (action.type) {
    case types.REQUEST_REPO:
      newProfile = {
        isFetching: true,
        profileSearch: action.profileSearch,
        profileId: action.profileId
      };
      newState = Object.assign({}, state, {[action.profileId]: newProfile
      });
      return newState;
    case types.DISPLAY_REPO:
      profile = state[action.profoleId];
      newProfile = Object.assign({}, profile, {
        isFetching: false,
        profileSearch: action.profileSearch,
        profile: action.profile,
        profileId: action.profileId
      });
      return newProfile;
    default:
      return state;
  }
}

export default reposById;
