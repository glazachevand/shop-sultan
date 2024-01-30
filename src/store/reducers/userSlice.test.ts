import { IUserState } from "types/user";
import { setAdminAuth, userReducer } from "./userSlice";

describe("userSlice.test", () => {
  test("setIsAdmin test", () => {
    const initialState: IUserState = {
      isAdmin: false,
    };
    expect(userReducer(initialState, setAdminAuth(true))).toEqual({ isAdmin: true });
  });
});
