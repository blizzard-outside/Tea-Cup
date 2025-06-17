const {Variety} = require('../models/models')
const ApiError = require('../error/ApiError');

class VarietyController {
    async create(req, res) {
        const {name} = req.body
        const variety = await Variety.create({name})
        return res.json(variety)
    }

    async getAll(req, res) {
        const varieties = await Variety.findAll()
        return res.json(varieties)
    }

}

module.exports = new VarietyController()
