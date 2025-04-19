class UserServices {
    constructor({userRepository}) {
        this.userRepository = userRepository ;
    }    
    async getUsers() {
        return this.userRepository.getUsers();
    }
    async getUserById(id) {
        return this.userRepository.getUserById(id);
    }
    async createUser(data) {
        return this.userRepository.createUser(data);
    }
    async updateUser(id , data) {
        return this.userRepository.updateUser(id , data);
    }
    async deleteUser(id) {
        return this.userRepository.deleteUser(id);
    }
}

export {
    UserServices
}