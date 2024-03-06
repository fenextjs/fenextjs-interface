export enum FileStatus {
    "NONE" = "NONE",
    "APPROVED" = "APPROVED",
    "PENDING" = "PENDING",
    "REFUSED" = "REFUSED",
}

export interface FileProps {
    text?: string;
    extend?: string;
    fileData: any;
    base64?: string;
    url?: string;
    status?: FileStatus | keyof typeof FileStatus;
}
