export interface PhoneCodeProps {
    img?: string;
    code: string;
}
export interface PhoneProps extends PhoneCodeProps {
    number: string;
    tel?: string;
}
