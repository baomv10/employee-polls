import { _getUser, _getUsers, _login } from "../_DATA";

describe("Users", () => {
  it("_getUser: should return result correctly", async () => {
    const id = "tylermcginnis";
    var result = await _getUser({ id });
    expect(result.id).toEqual(id);
  });

  it("_getUser: should return null", async () => {
    const id = "123";
    var result = await _getUser({ id });
    expect(result).toBeNull();
  });

  it("_getUsers: should return result correctly", async () => {
    var result = await _getUsers();
    expect(result).not.toBeNull();
  });

  it("_login: should login successfully", async () => {
    const param = {
      id: "zoshikanlu",
      password: "pass246",
    };
    var result = await _login(param);
    expect(result).not.toBeNull();
    expect(result.id).toEqual("zoshikanlu");
  });

  it("_login: should return error when user/password is not correct", async () => {
    const param = {
      id: "123",
      password: "abc",
    };
    await expect(_login(param)).rejects.toEqual(
      "User or password is incorrect"
    );
  });

  it("_login: should return error when all fields are emepty", async () => {
    const param = {
      id: "",
      password: "",
    };
    await expect(_login(param)).rejects.toEqual(
      "Please provide user, passoword"
    );
  });
});
