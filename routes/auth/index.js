const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.get("/", (req, res, next) => {
  res.send({
    message: "Hello Auth"
  })
})

router.post("/login", controller.checkUser, (req, res) => {
  res.send({
    username: req.body.username,
    token: req.token,
    message: req.message
  })
})

router.get("/check", controller.checkToken, (req, res) => {
  res.send({
    message: req.message
  })
})

module.exports = router
