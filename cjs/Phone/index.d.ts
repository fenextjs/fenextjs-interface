import { CountryProps } from "@/CSC";
export interface PhoneCodeProps {
    img?: string;
    code: string;
    code_country?: string;
    country?: CountryProps;
}
export interface PhoneProps extends PhoneCodeProps {
    number: string;
    tel?: string;
}
