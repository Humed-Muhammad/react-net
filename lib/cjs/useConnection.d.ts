declare const useConnection: (data?: {
    pollingIntreval: number;
}) => {
    connection: boolean | undefined;
};
export { useConnection };
