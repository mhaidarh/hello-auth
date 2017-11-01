const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.get("/", (req, res, next) => {
  res.send({
    message: "Hello Auth"
  })
})

router.post("/login", controller.checkBody, (req, res, next) => {
  res.send({
    body: req.body
  })
})

router.get("/check", controller.checkToken, (req, res, next) => {
  res.send({
    headers: req.headers.authorization
  })
})

module.exports = router
