const express = require("express");
const kendraRouter = express.Router();
const controller = require("../Controller/controller")
kendraRouter.post("/addKendra",controller.addKendraController);
kendraRouter.post("/updateKendra/:id", controller.updateKendraController);
kendraRouter.post("/updatecity", controller.updateCityController);
kendraRouter.post("/updatestate", controller.updateStateController);
kendraRouter.post("/getAllKendra", controller.getAllKendra);
kendraRouter.post("/getAllCity", controller.getAllCity);
kendraRouter.post("/getAllState", controller.getAllState);

module.exports= kendraRouter;