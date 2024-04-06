const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    familyDetails:{
        contactInfo:{
            Father_name: {
                type: String,
            },
            Mother_name: {
                type: String,
            },
            Aadhaar_no:{
                type: String,
                
            },
        },
    },
    age:{
        type:Number
    },
    phone_number:{
        type:Number
    }
})


const Model = mongoose.model('users', UserSchema)

module.exports = Model;