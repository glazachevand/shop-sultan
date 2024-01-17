import { IUserState } from "types/user";
import { setIsAdmin, userReducer } from "./userSlice";

describe("userSlice.test", () => {
  test("setIsAdmin test", () => {
    const initialState: IUserState = {
      isAdmin: false,
    };
    expect(userReducer(initialState, setIsAdmin(true))).toEqual({ isAdmin: true });
  });
});
