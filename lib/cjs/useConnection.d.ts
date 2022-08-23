declare const useConnection: (data?: {
    pollingIntreval: number;
}) => {
    connection: boolean;
};
export { useConnection };
