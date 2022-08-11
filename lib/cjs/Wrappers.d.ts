import React from "react";
interface OnlineNetiProps {
    pollingIntreval?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: JSX.Element | JSX.Element[];
}
export declare const OnlineWrapper: ({ children, className, style, pollingIntreval, }: OnlineNetiProps) => JSX.Element;
export declare const OfflineWrapper: ({ children, className, style, pollingIntreval, }: OnlineNetiProps) => JSX.Element;
export {};
