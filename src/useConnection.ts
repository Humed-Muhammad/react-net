import { useEffect, useState } from "react";
import isOnline from "is-online";

const useConnection = (
  data: { pollingIntreval: number } = { pollingIntreval: 500 }
) => {
  const [connection, setConnection] = useState<boolean>(true);
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

export { useConnection };
