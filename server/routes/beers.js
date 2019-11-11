const express = require("express")
const Beer = require("../models/Beer")

const router = express.Router()

// display all beers
router.get("/", (req, res, next) => {
  Beer.find()
    .then(beers => {
      res.json(beers)
    })
    .catch(err => next(err))
})
// display one beer
router.get("/:beerId", (req, res, next) => {
  const beerId = req.params.beerId
  Beer.findById(beerId)
    .then(beer => {
      res.json(beer)
    })
    .catch(err => next(err))
})

// add a Beer
router.post("/", (req, res, next) => {
  const userId = req.user._id
  const { name, type, style, description, nationality } = req.body
  Beer.create({ name, type, style, description, nationality, _creator: userId })
    .then(beer => {
      res.json({
        success: true,
        beer,
      })
    })
    .catch(err => next(err))
})

module.exports = router
