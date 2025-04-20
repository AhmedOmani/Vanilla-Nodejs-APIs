

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
            RETURNING id
        `;
        const createUser = await this.db.query(query , [name , email]);
        return createUser.rows;
    }
    async updateUser(id , data) {
        let index = 1 ;
        let fields = [] ;
        let values = [] ;

        if (data.name !== undefined) {
            fields.push(`name = $${index++}`);
            values.push(data.name);
        }

        if (data.email !== undefined) {
            fields.push(`email = $${index++}`);
            values.push(data.email);
        }

        values.push(id);

        const query = `
            UPDATE users 
            SET ${fields.join(', ')}
            WHERE id = $${index}
            RETURNING *
        `;

        const updateUser = await this.db.query(query , values);
        return updateUser.rows ;
    }
    async deleteUser(id) {
        const query = `DELETE FROM users WHERE id = $1`;
        const deleteUser = await this.db.query(query , [id]);
        return deleteUser.rowCount;
    }

    //Logic queries
    async getEmail(email) {
        const query = `SELECT email FROM users WHERE email = $1`;
        const result = await this.db.query(query , [email]);
        return result.rows ;
    }
};

export {
    UserRepository
};