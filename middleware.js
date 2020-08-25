function notFound(req, res, next) {
  res.status(404).send("Request URL not found");
}

function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).send(err.message);
}

module.exports = {
  notFound,
  errorHandler,
};
