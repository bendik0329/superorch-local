import reducer, { selectUser } from "../../../reducers/chat/users";
import { actionTypes } from "../../../actions/actionTypes";

describe("users reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle CREATE_USER", () => {
    expect(
      reducer([], {
        type: actionTypes.CREATE_USER,
        user: { id: 0 }
      })
    ).toEqual([{ id: 0 }]);
  });

  it("should handle UPDATE_USER", () => {
    expect(
      reducer(
        [
          { id: 0, modified: false },
          { id: 1, modified: false }
        ],
        {
          type: actionTypes.UPDATE_USER,
          id: 0,
          data: { modified: true }
        }
      )
    ).toEqual([
      { id: 0, modified: true },
      { id: 1, modified: false }
    ]);
  });

  it("should handle DELETE_USER", () => {
    expect(
      reducer([{ id: 0 }, { id: 1 }], {
        type: actionTypes.DELETE_USER,
        id: 1
      })
    ).toEqual([{ id: 0 }]);
  });
});

describe("selectUser", () => {
  it("should select a user by id", () => {
    expect(selectUser([{ id: 0 }, { id: 1 }], 1)).toEqual({ id: 1 });
  });
});
