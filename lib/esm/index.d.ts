import { OnlineWrapper, OfflineWrapper } from "./Wrappers";
declare const useConnection: (data?: {
    pollingIntreval: number;
}) => {
    connection: boolean | undefined;
};
export { useConnection, OnlineWrapper, OfflineWrapper };
