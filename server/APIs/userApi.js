const exp = require("express")
const userApp = exp.Router()
const UserModel = require("../models/userModel")
const expressAsyncHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

// add body parser middleware
userApp.use(exp.json())

// API to get all users
userApp.get(
  "/users",
  expressAsyncHandler(async (req, res) => {
    // get all users from user collection
    const usersList = await UserModel.find()
    // send res
    res.send({ message: "All users", payload: usersList })
  })
)

// users based on Blood group
userApp.get(
  "/users/:bloodGroup",
  expressAsyncHandler(async (req, res) => {
    const givenBloodGroup = req.params.bloodGroup
    // find all users with required blood group
    const usersList = await UserModel.find({ bloodGroup: givenBloodGroup })
    // send res
    if (usersList === null) {
      res.send({ message: "No user with given blood group" })
    } else {
      res.send({ message: "Users found", payload: usersList })
    }
  })
)

// create a user
userApp.post(
  "/user",
  expressAsyncHandler(async (req, res) => {
    // get new user object
    const newUser = req.body
    // hash the password
    const hashedPassword = await bcryptjs.hash(newUser.password, 5)
    // replace plain password with hashed password
    newUser.password = hashedPassword
    // create doc for new user
    const userDocument = new UserModel(newUser)
    // console.log(userDocument)
    // save to db
    let dbRes = await userDocument.save()
    console.log(dbRes)
    // send res
    res.send({ message: "New user created" })
  })
)

// user authentication(user login)
userApp.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    // get userCredObj
    const userCredObj = req.body
    // check if user is present(verify username)
    let userInDB = await UserModel.findOne({ email: userCredObj.email })
    // if user is not present
    if (userInDB === null) {
      res.send({ message: "Invalid email" })
    }
    // if user is present,compare passwords
    else {
      let result = await bcryptjs.compare(
        userCredObj.password,
        userInDB.password
      )
      if (result === false) {
        res.send({ message: "Invalid password" })
      } else {
        // create JWT token
        let signedToken = jwt.sign({ email: userInDB.email }, "abcdef", {
          expiresIn: "1d",
        })
        // send res
        res.send({
          message: "login success",
          token: signedToken,
          payload: userInDB,
        })
      }
    }
  })
)

// update a user
userApp.put(
  "/users",
  expressAsyncHandler(async (req, res) => {})
)

module.exports = userApp
