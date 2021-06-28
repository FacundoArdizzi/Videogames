require('dotenv').config();
const {Videogame, Gender} = require('../db')
const axios = require('axios')
const {API_KEY} = process.env
const {v4 : uuidv4} = require('uuid');
const { response } = require('express');
const Sequelize = require('sequelize');
const { get } = require('../routes/Videogames');
const Op = Sequelize.Op;

const addVideogame = async (req, res, next) => { 
    const payload = req.body
    console.log(payload)
    if(!payload[0].name) return res.status(400).send('You cannot create a game without a name')
    if(!payload[0].description) return res.status(400).send('You cannot create a game without a description')
    if(!payload[0].platforms) return res.status(400).send('You need to specify at leas one platform')
    if(payload[1].length < 1) return res.status(400).send('You need to specify at leas one gender')

    try {
        const id = uuidv4()
        let d = new Date()
        let date = d.getDate() + "-"+ d.getMonth() + "-" + d.getFullYear();
        const game = await Videogame.create({
            id,
            name: payload[0].name,
            description: payload[0].description,
            platforms: payload[0].platforms,
            released: date
        })
        const genders = payload[1]
        genders.forEach(async (c) => {
            const gender = await Gender.findOne({
                where: {
                    id: c
                }
            })
            let response = await game.addGender(gender)
        })

        res.status(200).send('Your game has been created successfuly!')
    } catch (err) {
        next(err)
    }
}

const getVideogames = async (req, res, next) => {
    try {
        if(req.query.name) {
            const name = req.query.name
            const response = await getSearchedGames(name)
            return res.status(200).send(response);
        }
        const createdGames = await Videogame.findAll({
            include:{
                model: Gender,
                attributes: ['name'],
                through: {
                    attributes:[]
                }
            }
        })
        const api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        let apiGames = await mapGames(api.data.results)
        let next = api.data.next
        while (apiGames.length < 100) {
            const result = await axios.get(next)
            const games = await mapGames(result.data.results)
            apiGames = [...apiGames, ...games]
            next = result.data.next
        }
        const response = createdGames.concat(apiGames)
        res.status(200).send(response)
    } catch (err) {
        next(err)
    }
}

const mapGames = async (arr) => {
    const response = await arr.map(c => {
        return {
            id: c.id,
            name: c.name, 
            img: c.background_image,
            rating: c.rating,
            genders: c.genres.map(gender => {
                return gender.name
            })
        }
    })
    return response;
}

const getSearchedGames = async (name) => {
    const dbGames = await Videogame.findAll({
        where: {
            name: {[Op.like]: '%' + name + '%'}
        },
        include:{
            model: Gender,
            attributes: ['name'],
            through: {
                attributes:[]
            }
        }
    })
    const api = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    let apiGames = await mapGames(api.data.results)
    let next = api.data.next
    while(apiGames.length < 100) {
        const result = await axios.get(next)
        const games = await mapGames(result.data.results)
        apiGames = [...apiGames, ...games]
        next = result.data.next
    }
    console.log(apiGames.length)
    return dbGames.concat(apiGames) 
}

const getGameDetails = async (req, res, next) => {
    const id = req.params.id
    try {
        if(id.length > 8){
            const game = await Videogame.findOne({
                where: {id: id},
            })
            console.log(game)
            return res.status(200).send(game)
        }
        const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        const result = {
            id: game.data.id,
            name: game.data.name,
            img: game.data.background_image,
            rating: game.data.rating,
            description: game.data.description,
            released: game.data.released,
            platforms: game.data.parent_platforms.map(c => c.platform.name)
        }
        res.status(200).send(result)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    addVideogame,
    getVideogames,
    getGameDetails,
}