const express = require("express");
const userRouter = express.Router();
const controller = require("../Controller/UserController")
const middleware= require("../Middleware/fetchuser")

userRouter.post("/signup",controller.register);
userRouter.post("/login",controller.login);
userRouter.get("/getuser",middleware.fetchuser, controller.getuser );
userRouter.get("/otpgenerate", middleware.localVariables, controller.otpgenerate);
userRouter.get("/verifyOTP", controller.otpverify);
userRouter.post("/resetPassword", controller.resetpassword);
module.exports = userRouter;