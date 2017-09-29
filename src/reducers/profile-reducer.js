import constants from "./../constants";

const { defaultState, types } = constants;

const profileReducer = (state = defaultState, action) => {
  let profile;
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
      profile = state[action.profileId];
      newProfile = Object.assign({}, profile, {
        isFetching: false,
        name: action.name,
        html: action.html,
        profileId: action.profileId
      });
      newState = Object.assign({}, state, {["brittany"]: newProfile });
      console.log(newState);
      return newState;
    default:
      return state;
  }
}

export default profileReducer;
