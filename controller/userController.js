import { generateUserInstance } from "../factories/userFactory.js";
import { fetchPostBodyData } from "../utill/fetchPostBodyData.js";
import { Response } from "../utill/response.js";

const userService = generateUserInstance();

const userController = {
    //COMPLETED
    getHomePage: (request , response) => {
        response.writeHead(200 , {"Content-Type" : "text/plain"});
        response.write("Welcome to the home page\n");
        return response.end();
    },

    getUsers: async (request , response) => {
        const serviceResponse = await userService.getUsers();
        return Response(response , {status: 200 , data: {message: "Users fetched successfully" , users: serviceResponse}});
    },

    getUserById: async (request , response , params) => {
        const serviceResponse = await userService.getUserById(params.id);
        Response(response , {status: 200, data: { messages: "User fetched successfully", user: serviceResponse}});
    },

    // {user : {id , name , email}};
    createUser: async (request , response) => {
        try {
            const data = request.body;
            const users = await userService.getUsers();

            console.log("users") ;
            console.log(users);
            
            const foundUser = users.find((user) => user.email === data.email) ;

            if (foundUser) 
                return Response(response , {status : 409 , data: {message: `${data.email} already exists!`}});
            
            const serviceResponse = await userService.createUser(data);

            return Response(response , {
                status: 201 ,
                data: {
                    message: "User created successfully",
                    user: serviceResponse 
                }
            });

        } catch (error) {
            console.error(error);
            return Response(response , {
                status:404 ,
                data: {
                    message: error.message
                }
            })
        }
    },

    //TODO PUT/DELETE endpoins

    updateUser: async (request , response) => {
        const serviceResponse = await userService.updateUser(id , data);
        response.writeHead(200 , {"Content-Type" : "application/json"});
        response.write("Hello from updateUser\n");
        //TODO: extract the id and data from request body
        return response.end();
    },

    deleteUser: async (request , response) => {
        const serviceResponse = await userService.deleteUser(id);
        response.writeHead(200 , {"Content-Type" : "application/json"});
        response.write("Hello from deleteUser\n");
        //TODO: extract the id from body request
        return response.end();
    }
}

export {
    userController
}