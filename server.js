import express from 'express'
import { configDotenv } from 'dotenv'
import { getAllUsers, getUser, insertUser, updateUser } from './src/db.js'
configDotenv()

const port = process.env.APP_PORT

const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
    const response = await getAllUsers()
    res.json(response)
})

app.get('/user', async (req, res) => {
    const { id } = req.query
    if(!id){
        return res.status(403).send()
    }

    const response = await getUser(user)
    res.json(response)
})

app.post('/user', async (req, res) => {
    const newUser = req.body
    if(!newUser || newUser == ""){
        return res.status(403).send()
    }
    
    const users = await insertUser(newUser)
    res.status(201).send()
})

app.put('/user', async (req, res) => {
    const user = req.body
    const { id } = req.query

    if(!id){
        return res.status(403).send()
    }
    
    const users = await updateUser(user, id)

    res.status(204).send()
})


app.listen(3000, () => console.log(`Server running on port ${port}`))