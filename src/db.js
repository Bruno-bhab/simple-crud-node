import { configDotenv } from 'dotenv'
import knex from 'knex'
configDotenv()

const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
   }
});

async function getAllUsers() {
    return await db
      .select('*')
      .from('user')
  }

async function getUser(user_id) {
    return await db
        .select('*')
        .from('user')
        .where('id', user_id)
  }

async function insertUser(data){
    return await db
        .insert(data)
        .into("user")
        .catch(err => { console.log(err) })
}

async function updateUser(data, user_id){
    return await db('user')
    .update(data)
    .where('id', user_id)
    .catch(err => { console.log(err) })
}

export {
    getAllUsers,
    getUser,
    insertUser,
    updateUser,
}



