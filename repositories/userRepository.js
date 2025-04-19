class UserRepository {
    constructor({db}) {
        this.db = db ;
    }
    async getUsers() {
        const users = await this.db.query("SELECT * FROM users");
        return users.rows ;
    }
    async getUserById(id) {
        const user = await this.db.query(`SELECT * FROM users WHERE id = ${id}`);
        return user.rows ;
    }
    async createUser(data) {
        const {name , email} = data ;
        const query = `
            INSERT INTO users (name , email)
            VALUES ($1, $2)
            RETURNING *
        `;
        const createUser = await this.db.query(query , [name , email]);
        console.log(createUser.rows);
        return createUser.rows[0];
    }
    async updateUser(id , data) {}
    async deleteUser(id) {}
};

export {
    UserRepository
};