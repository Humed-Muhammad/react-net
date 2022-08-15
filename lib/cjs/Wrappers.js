"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineWrapper = exports.OnlineWrapper = void 0;
var react_1 = __importDefault(require("react"));
var useConnection_1 = require("./useConnection");
var OnlineWrapper = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style, _b = _a.pollingIntreval, pollingIntreval = _b === void 0 ? 1500 : _b;
    var connection = (0, useConnection_1.useConnection)({
        pollingIntreval: pollingIntreval,
    }).connection;
    return (react_1.default.createElement("div", { className: className, style: style }, connection && children));
};
exports.OnlineWrapper = OnlineWrapper;
var OfflineWrapper = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style, _b = _a.pollingIntreval, pollingIntreval = _b === void 0 ? 1500 : _b;
    var connection = (0, useConnection_1.useConnection)({
        pollingIntreval: pollingIntreval,
    }).connection;
    return (react_1.default.createElement("div", { className: className, style: style }, !connection && children));
};
exports.OfflineWrapper = OfflineWrapper;
