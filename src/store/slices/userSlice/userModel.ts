import _ from "lodash";
import { PartialDeep } from "type-fest";
import { User } from "../../../types/userTypes";

function UserModel(data: PartialDeep<User>): User {
  data = data || {};

  return _.defaults(data, {
    uid: "",
    role: null,
    data: {
      displayName: "Guest User",
      photoURL: "",
      email: "",
      settings: {},
    },
  });
}

export default UserModel;
