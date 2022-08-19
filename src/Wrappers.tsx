import React from "react";
import { useConnection } from "./useConnection";
import { OnlineNetiProps } from "./types";

export const OnlineWrapper = ({
  children,
  className,
  style,
  pollingIntreval = 500,
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
