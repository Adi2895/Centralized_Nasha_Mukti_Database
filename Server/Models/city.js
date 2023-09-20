const mongoose = require("mongoose");

const city = new mongoose.Schema({

    state:{
        type: mongoose.Schema.Types.ObjectID, 
        ref : 'state'
    },

    cityName:{
        type:String, 
        required:true,
    }      
})

const cityModel = mongoose.model("city", city);
module.exports = cityModel;