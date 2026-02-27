//API CREATION

const getUsers = (req, res) => {
  console.log("getUsers called...");
  res.send("users api called...");
};

const getUserData = (req, res) => {
  //dummy user obj..
  const userObj = {
    id: 101,
    name: "amit",
    age: 23,
  };

  res.json({
    message: "Get user Data !!",
    data: userObj,
  });
};

const users = [
  { id: 101, name: "raj", age: 23 },
  { id: 102, name: "parth", age: 24 },
  { id: 103, name: "jay", age: 25 },
];

const allUsers = (req, res) => {
  //dummy array
  res.json({
    message: "all users",
    data: users,
  });
};
const getUserById = (req, res) => {
  //params.id
  console.log(req.params.id); //id 101
  const foundUser = users.find((user) => user.id == req.params.id);

  if (foundUser) {
    res.json({
      message: "user found..",
      data: foundUser,
    });
  } else {
    res.json({
      message: "user not found..",
    });
  }
};

module.exports = {
  getUsers,
  getUserData,
  allUsers,
  getUserById,
};
