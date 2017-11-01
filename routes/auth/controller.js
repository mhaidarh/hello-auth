const checkBody = (req, res, next) => {
  if (req.body.username) next()
  else req.message = "USERNAME IS NOT PROVIDED"
  next()
}

const checkToken = (req, res, next) => {
  if (req.headers.authorization) next()
  else req.message = "AUTHORIZATION TOKEN IS NOT PROVIDED"
  next()
}

module.exports = {
  checkBody,
  checkToken
}
