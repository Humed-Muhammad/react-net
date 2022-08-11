import { OnlineWrapper, OfflineWrapper } from "./Wrappers.js";
declare const useConnection: (data?: {
    pollingIntreval: number;
}) => {
    connection: boolean | undefined;
};
export { useConnection, OnlineWrapper, OfflineWrapper };
