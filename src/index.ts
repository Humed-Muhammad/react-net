import { useEffect, useState } from "react";
import isOnline from "is-online";
import { OnlineWrapper, OfflineWrapper } from "./Wrappers";

const useConnection = (
  data: { pollingIntreval: number } = { pollingIntreval: 1500 }
) => {
  const [connection, setConnection] = useState<boolean>();
  useEffect(() => {
    const getConnection = async () => {
      const result: boolean = await isOnline();
      setConnection(result);
    };
    const interval = setInterval(getConnection, data?.pollingIntreval);

    return () => clearInterval(interval);
  }, []);
  return { connection };
};

export { useConnection, OnlineWrapper, OfflineWrapper };
