import constants from "./../../src/constants";
import * as actions from "./../../src/actions";
import profileReducer from "./../../src/reducers/profile-reducer";


describe("Profile App", () => {
  const { defaultState, types } = constants;

  describe("profile reducer", () => {
    const profileData = defaultState.profileReducer[defaultState.selectedProfile];
      it('should return to default state', () => {
        expect(profileReducer(defaultState.profileReducer, { type: null }))
        .toEqual(defaultState.profileReducer);
    });
  })
})
