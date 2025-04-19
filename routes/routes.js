import { userController } from "../controller/userController.js";

// **PATH PARAMETER REST API**

class Router {
    constructor() {
        this.routes = [];
    }

    addRouter(method , pathPattern , controller) {
        this.routes.push({method: method.toUpperCase() , pathPattern , controller});
    }

    match(routeMethod , routePath) {
        for (const route of this.routes) {
            if (route.method === routeMethod.toUpperCase()) {
                const match = this.matchPath(route.pathPattern , routePath);
                if(match) 
                    return {controller: route.controller , params: match.params};
            }
        }
        return null;
    }

    matchPath(pathPattern , routePath) {
        //"/users/:userId/posts/:postId"
        //"/users/42/posts/123"

        const pathPatternParts = pathPattern.split("/").filter(part => part !== '');
        const routePathParts   = routePath.split("/").filter(part => part !== '');

        if (pathPatternParts.length !== routePathParts.length) return null;


        //pathPatternParts  = ["users", ":userId", "posts", ":postId"]
        //routePathParts = ["users", "42", "posts", "123"]

        //construct the params and compare the rest;
        const params = {};
        for (let i = 0 ; i < pathPatternParts.length ; i++) {
            const pathPart = pathPatternParts[i];
            const routePart = routePathParts[i];

            if (pathPart.startsWith(":")) {
                //     **clarification**
                //     ":userId" = userId
                //      param[userId] = 42   
                const paramName = pathPart.substring(1);
                params[paramName] = routePart ;
            } else {
                if (pathPart != routePart) return null;
            }
        }
        return { params }
    }
}


const route = new Router() ;

//userRoutes
route.addRouter("GET" , "/" , userController.getHomePage);
route.addRouter("GET" , "/users" , userController.getUsers);
route.addRouter("GET" , "/users/:id" , userController.getUserById) ;
route.addRouter("POST" , "/users" , userController.createUser);
route.addRouter("PUT" , "/users/:id" , userController.updateUser);
route.addRouter("DELETE" , "/users/:id" , userController.deleteUser);

export {
    route
}