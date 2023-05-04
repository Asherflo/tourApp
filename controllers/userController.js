const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
;
exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: "ero",
    message: "This route is not define",
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "ero",
    message: "This route is not define",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "errors",
    message: "This route is not define",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "ero",
    message: "This route is not define",
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: "errors",
    message: "This route is not define",
  });
};
