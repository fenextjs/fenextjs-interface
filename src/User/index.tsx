import { ImgDataProps } from "../Img";
import { PhoneProps } from "../Phone";

export enum UserTypeVerifyProps {
    email,
    phone,
    company,
}

export enum UserStatusProps {
    VERIFY = "VERIFY",
    NOVERIFY = "NOVERIFY",
    BAN = "BAN",
    PENDING = "PENDING",
}

export enum UserRoleProps {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    BACKOFFICE = "BACKOFFICE",
}

export interface UserProps {
    status: UserStatusProps;

    id: string;
    token: string;
    name: string;
    img: ImgDataProps;
    role: UserRoleProps;
    phone?: PhoneProps;
    email: string;
    stripe_id?: string;
    dateCreate: Date;

    verify?: {
        [id in UserTypeVerifyProps]: UserStatusProps;
    };
}
