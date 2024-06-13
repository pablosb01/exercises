const pgPromise = require('pg-promise')
const joi = require('joi')
let planets = require('../data/planets.json')
const db = pgPromise()('postgres://postgres:postgres@localhost:5432/postgres') 
db.connect()
    .then(object => console.log(object))


const planetSchema = joi.object({
    id: joi.number().integer().required(),

    name: joi.string().required().trim(),
})

const mainController = {
    getAll : (req, res) => {
        res.json(planets)
    },

    getPlanetById : (req, res) => {
        const {id} = req.params
        const planet = planets.find(planet => planet.id === parseInt(id))
        res.status(200).json(planet)
    },

    create : (req, res) => {
        const newName = req.body.name
        const newId = planets.length + 1
        const obj = {
            id: newId,
            name: newName,
        }
        let result = planetSchema.validate(obj)
        if(result.error) {
            return res.status(400).json({
                msg: 'error',
                data: result.error.message
            })
        }
        
        planets.push(obj)
        res.status(201).json({
            msg: 'success',
            data: planets
    })
    },
    
    destroyPlanet : (req, res) => {
        const {id} = req.params
        planets = planets.filter(p => p.id !== Number(id))
        res.status(200).json({
            msg: 'deleted',
            data: planets,
        })
    }
    
}

module.exports = mainController

