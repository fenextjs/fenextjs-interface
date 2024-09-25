export interface PhoneCodeProps {
    img?: string;
    code: string;
    code_country?: string;
    country_name?: string;
}
export interface PhoneProps extends PhoneCodeProps {
    number: string;
    tel?: string;
}
