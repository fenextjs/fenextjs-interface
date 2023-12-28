import { ErrorProps } from "../Error";
export declare enum RequestResultTypeProps {
    OK = "OK",
    ERROR = "ERROR",
    NONE = "NONE",
    NORMAL = "NORMAL",
    WARNING = "WARNING"
}
export interface RequestResultDataProps<R = any, E = any, T = RequestResultTypeProps> {
    type: T;
    result?: R;
    error?: ErrorProps<E>;
    message?: string;
}
export type RequestResultProps<R = any, E = any, T = RequestResultTypeProps> = Promise<RequestResultDataProps<R, E, T>> | RequestResultDataProps<R, E, T>;
export type RequestProps<Q = any, R = any, E = any, T = RequestResultTypeProps> = (data: Q) => RequestResultProps<R, E, T>;
