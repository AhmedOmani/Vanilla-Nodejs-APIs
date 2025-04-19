const fetchPostBodyData = async (request) => {
    return new Promise((resolve , reject) => {
        let data = "" ;
        request.on("data" , (chunk) => {
            data += chunk ;
        });
        request.on("end" , () => {
            try {
                data = data ? JSON.parse(data) : {};
                resolve(data)
            } catch (error) {
                reject(error);
            }
        });
    });
}

export {
    fetchPostBodyData 
}