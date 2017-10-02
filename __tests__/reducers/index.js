import constants from "./../../src/constants";
import * as actions from "./../../src/actions";
import profileReducer from "./../../src/reducers/profile-reducer";


describe("Profile App", () => {
  const { defaultState, types } = constants;

  it('should return to default state', () => {
    expect(profileReducer(defaultState.profileReducer, { type: null }))
    .toEqual(defaultState.profileReducer);
  });

  it("should update state on request repos", () => {
    const action = actions.requestRepo();
    const newObject = {
      isFetching: true,
      profileId: action.profileId
  };
  expect(profileReducer(defaultState.profileReducer,     action)[action.portfolioId])
  .toEqual(newObject);
});

  it("should update state on receive repo", () => {
    const action = actions.receiveRepo("name", "html");
    const newObject = {
      isFetching: false,
      name: action.name,
      html: action.url,
      profileId: action.profileId
    };
    expect(profileReducer(defaultState.profile, action)["starred"])
     .toEqual(newObject);
  });
})
