const { CustomAPIError } = require("../errors/customError");

const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res
    .status(500)
    .json({ message: `Something went wrong please try again` });
};

module.exports = errorHandlerMiddleware;
