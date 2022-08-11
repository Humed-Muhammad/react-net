import React from "react";
import { useConnection } from ".";

interface OnlineNetiProps {
  pollingIntreval?: number;
  style?: React.CSSProperties;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}
export const OnlineWrapper = ({
  children,
  className,
  style,
  pollingIntreval = 1500,
}: OnlineNetiProps) => {
  const { connection } = useConnection({
    pollingIntreval,
  });
  return (
    <div className={className} style={style}>
      {connection && children}
    </div>
  );
};

export const OfflineWrapper = ({
  children,
  className,
  style,
  pollingIntreval = 1500,
}: OnlineNetiProps) => {
  const { connection } = useConnection({
    pollingIntreval,
  });
  return (
    <div className={className} style={style}>
      {!connection && children}
    </div>
  );
};
