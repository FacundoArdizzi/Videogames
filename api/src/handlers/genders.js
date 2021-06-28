require('dotenv').config();
const { Gender } = require('../db')
const axios = require('axios')
const {API_KEY} = process.env


const getGenders = async () => {
    const genders = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const data = genders.data.results.map(c => {
        return {
            id: c.id,
            name: c.name,
        }
    })
    const result = await Gender.bulkCreate(data)
}

module.exports = {
    getGenders
}