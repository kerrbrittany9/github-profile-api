import constants from "./../constants";

const { defaultState, types } = constants;

const profileReducer = (state = defaultState, action) => {
  let newProfile;
  let newState;
  let starred;
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
        newState = action.starred;
      return newState;
    default:
      return state;
  }
}

export default profileReducer;
