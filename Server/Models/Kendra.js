const mongoose = require("mongoose");
const Kendra = new mongoose.Schema({

    city:{
        type: mongoose.Schema.Types.ObjectID, 
        ref : 'city'
    },

    Name:{
        type:String,
        required:true,
        }, 
    description:{
        type:String,
        required:true,
    },
    image:[
        {
            type:String, 
        }
    ],
    address:{
        type: String,
        required: true
        },

    contactInfo:{
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        website:{
            type: String,
            
        },
    },

    location:{
        link:{
            type: String,
        },
        coordinates:{
            type: [Number],
        }
        }

});

const KendraModel = mongoose.model("kendra", Kendra);
module.exports = KendraModel;
