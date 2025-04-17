
const userController = {
    getHomePage: (request , response) => {
        response.writeHead(200 , {"Content-Type" : "text/plain"});
        response.write("Welcome to the home page\n");
        return response.end();
    },

    getUsers: async (request , response) => {
        response.writeHead(200 , {"Content-Type" : "application/json"});
        response.write("Hello from getUsers\n");
        //TODO: call service layer to handle db communication
        return response.end();
    },

    getUserById: async (request , response) => {
        response.writeHead(200 , {"Content-Type" : "application/json"});
        response.write("Hello from getUserById\n");
        //TODO: call service layer to handle db communication
        return response.end();
    },

    createUser: async (request , response) => {
        response.writeHead(200 , {"Content-Type" : "application/json"});
        response.write("Hello from createUser\n");
        //TODO: call service layer to handle db communication
        return response.end();
    },

    updateUser: async (request , response) => {
        response.writeHead(200 , {"Content-Type" : "application/json"});
        response.write("Hello from updateUser\n");
        //TODO: call service layer to handle db communication
        return response.end();
    },

    deleteUser : async (request , response) => {
        response.writeHead(200 , {"Content-Type" : "application/json"});
        response.write("Hello from deleteUser\n");
        //TODO: call service layer to handle db communication
        return response.end();
    }
}

export {
    userController
}