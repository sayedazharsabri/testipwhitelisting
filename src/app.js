"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const ip_1 = __importDefault(require("ip"));
// Create an Express application
const app = (0, express_1.default)();
const port = 3000;
// Define a route to make a GET request to 'https://ipdomainipwhitelisting.onrender.com/'
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Make a GET request using axios
        const response = yield axios_1.default.get("https://ipdomainipwhitelisting.onrender.com/", {
            withCredentials: true,
            headers: {
                realip: ip_1.default.address(),
            },
        });
        // Send the result back to the client
        res.status(response.status).send(response.data);
    }
    catch (error) {
        // Handle errors
        res.status(500).send("Error fetching data");
    }
}));
// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
