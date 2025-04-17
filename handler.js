import { parse } from "node:url";
import { route } from "./routes/routes.js";

const handler = async (request , response) => {

    const {url , method} = request ;
    const fullURL = parse(url , true);
    const routePath = fullURL.pathname;

    const matchedRoute = route.match(method , routePath) ;

    if (!matchedRoute) {
        response.writeHead(404 , { "Content-Type" : "application/json" });
        response.write(JSON.stringify("Bad request, page not found!"));
        return response.end();
    }

    matchedRoute.controller(request , response , matchedRoute.params);
}

export { 
    handler
}