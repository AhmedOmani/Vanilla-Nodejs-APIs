import { fetchPostBodyData } from "../utill/fetchPostBodyData.js";
import { Response } from "../utill/response.js";

const validateUserData = async (request , response , next) => {
    try {
        const body = await fetchPostBodyData(request);
        
        if (!body.name || !body.email) {
            return Response(response , {status: 400 , data: {message: "Name and email are required"}});
        }
        
        request.body = body ;
        
        next.controller(request , response , next.params);
    } catch (error) {
        return Response(response , {status: 404, data: {message: "Bad request! validation error"}});
    }
}

export {
    validateUserData
}