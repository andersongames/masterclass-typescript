"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
//Type inference: In the vast majority of cases, TypeScript can automatically determine the type.
function getUserName() {
    return 'Anderson';
}
var userName = getUserName();
//That way, I don't need to declare the type of the variable / return of the function
var username2 = 'Anderson';
//I can only declare the variable
var userName3 = "Anderson";
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(3333);
