const mongoose = require("mongoose");

const state = new mongoose.Schema({
    state:{
        type:String,
        required:true,
        unique:true
    }, 
})

const stateModel = mongoose.model("state",state );
module.exports = stateModel;