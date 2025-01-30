export type DateDataTypeProps = "normal" | "range";

export interface DateDataProps {
    type?: DateDataTypeProps;
    date?: Date;
    dateRange?: Date[];
}
