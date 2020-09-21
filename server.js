const express = require('express')
const fetch = require('node-fetch')
const redis = require('redis')

const app = express()


const PORT = process.env.PORT || 1234
const REDIS_PORT = process.env.PORT || 6379

const client = redis.createClient(REDIS_PORT)

const setResponse = (username, repoCounter) => {
    return `this ${username} has total of this public repo => ${repoCounter}`
}


// GET REPO MIDDLEWARE
const getRepository = async (req, res, next) => {
    try {
        console.log('Fetch something..maybe ur data')

        const {
            username
        } = req.params
        console.log('username get repo >> ', username)
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log('data >> ', data)

        const repoCounter = data.public_repos

        // do the redis thingy
        const clientSet = client.setex(username, 3600, repoCounter)
        console.log('client setex >> ', clientSet)
        res.send(setResponse(username, repoCounter))

    } catch (error) {
        console.log(error)
        res.status(500)
    }
}

//CACHE MIDDLEWARE
const cache = (req, res, next) => {
    const {
        username
    } = req.params
    console.log('username cache >> ', username)
    const clientGet = client.get(username, (error, data) => {
        if (error) {
            throw error
        }

        if (data) {
            res.send(setResponse(username, data))
        } else {
            next()
        }
    })
}

app.get('/repo/:username', cache, getRepository)

app.listen(1234, () => {
    console.log(`Listening http://localhost:${PORT}`)
})