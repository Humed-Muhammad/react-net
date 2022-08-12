import React from "react";
import { useConnection } from ".";
export var OnlineWrapper = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style, _b = _a.pollingIntreval, pollingIntreval = _b === void 0 ? 700 : _b;
    var connection = useConnection({
        pollingIntreval: pollingIntreval,
    }).connection;
    return (React.createElement("div", { className: className, style: style }, connection && children));
};
export var OfflineWrapper = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style, _b = _a.pollingIntreval, pollingIntreval = _b === void 0 ? 1500 : _b;
    var connection = useConnection({
        pollingIntreval: pollingIntreval,
    }).connection;
    return (React.createElement("div", { className: className, style: style }, !connection && children));
};
