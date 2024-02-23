export declare enum AlertType {
    OK = "OK",
    ERROR = "ERROR",
    NORMAL = "NORMAL",
    WARNING = "WARNING"
}
export interface AlertProps<T = any> {
    message: string;
    type: AlertType | keyof typeof AlertType;
    data?: T;
}
