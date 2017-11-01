const checkBody = (req, res, next) => {
  console.log(req.body)
  next()
}

const checkToken = (req, res, next) => {
  console.log(req.headers.authorization)
  next()
}

module.exports = {
  checkBody,
  checkToken
}
