import { parse } from "node:url";
import { route } from "./routes/routes.js";
import { validateUserData } from "./validation/userValidation.js";

const handler = async (request , response) => {

    const {url , method} = request ;
    const fullURL = parse(url , true);
    const routePath = fullURL.pathname;

    //matched routes is object contains :
    // 1- the controller that match the specific route .
    // 2- the params in path parameter.
    // for example:  GET http://localhost:3000/users
    //      matchdRoute: {
    //             controller => getUsers
    //             params => {}
    //      }
    
    const matchedRoute = route.match(method , routePath) ;

    if (!matchedRoute) {
        response.writeHead(404 , { "Content-Type" : "application/json" });
        response.write(JSON.stringify("Bad request, page not found!"));
        return response.end();
    }

    if (method == "POST" || method == "PUT") {
        console.log("matched route");
        console.log(matchedRoute);
        validateUserData(request , response , matchedRoute);
    }
    else {
        matchedRoute.controller(request , response , matchedRoute.params);
    }
}

export { 
    handler
}