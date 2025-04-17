import http from "node:http";
import { handler } from "./handler.js";

const server = http.createServer(handler);

server.listen(3000 , () => {
    console.log("Server is running on PORT 3000");
});

export {
    server
}