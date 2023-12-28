"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleProps = exports.UserStatusProps = exports.UserTypeVerifyProps = void 0;
var UserTypeVerifyProps;
(function (UserTypeVerifyProps) {
    UserTypeVerifyProps[UserTypeVerifyProps["email"] = 0] = "email";
    UserTypeVerifyProps[UserTypeVerifyProps["phone"] = 1] = "phone";
    UserTypeVerifyProps[UserTypeVerifyProps["company"] = 2] = "company";
})(UserTypeVerifyProps || (exports.UserTypeVerifyProps = UserTypeVerifyProps = {}));
var UserStatusProps;
(function (UserStatusProps) {
    UserStatusProps["VERIFY"] = "VERIFY";
    UserStatusProps["NOVERIFY"] = "NOVERIFY";
    UserStatusProps["BAN"] = "BAN";
    UserStatusProps["PENDING"] = "PENDING";
})(UserStatusProps || (exports.UserStatusProps = UserStatusProps = {}));
var UserRoleProps;
(function (UserRoleProps) {
    UserRoleProps["ADMIN"] = "ADMIN";
    UserRoleProps["CUSTOMER"] = "CUSTOMER";
    UserRoleProps["BACKOFFICE"] = "BACKOFFICE";
})(UserRoleProps || (exports.UserRoleProps = UserRoleProps = {}));
//# sourceMappingURL=index.js.map