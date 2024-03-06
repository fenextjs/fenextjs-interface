export declare enum FileStatus {
    "NONE" = "NONE",
    "APPROVED" = "APPROVED",
    "PENDING" = "PENDING",
    "REJECTED" = "REJECTED"
}
export interface FileProps {
    text?: string;
    extend?: string;
    fileData: any;
    base64?: string;
    url?: string;
    status?: FileStatus | keyof typeof FileStatus;
}
