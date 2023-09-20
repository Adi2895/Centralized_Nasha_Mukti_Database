const mongoose = require("mongoose");
const uri = "mongodb+srv://jangraaditya11:5CdmDpR9cOkPhdlg@nashamukti-cluster.0edji1h.mongodb.net/nashamukti?retryWrites=true&w=majority"
// const uri = "mongodb://localhost/nashamukti"
const connect = async()=>{
    
    await mongoose.connect(uri, {
        useNewUrlParser: true, // Use the new URL parser
        useUnifiedTopology: true,

    }).then(()=>{
        console.log("database connected successfully")
    }).catch(()=>{
        console.log("connection problem in database")
    })
}

module.exports = connect;