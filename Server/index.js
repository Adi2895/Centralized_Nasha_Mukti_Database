const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connect = require("./connection")
const userRouter = require("./Router/userRouter")
const kendraRouter = require("./Router/kendraRouter");
// this event emitter is temporary
// require('events').EventEmitter.defaultMaxListeners = 15;
const PORT = 8080;

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Connect to MongoDB
// const uri = "mongodb+srv://jangraaditya11:5CdmDpR9cOkPhdlg@nashamukti-cluster.0edji1h.mongodb.net/nashamukti?retryWrites=true&w=majority"
connect();

app.use("/authenticate/",userRouter);
app.use("/api/",kendraRouter);


app.get("/",(req , res)=>{
  res.send("Hello world"); 
})

app.listen(PORT, ()=> {
  console.log(`Server started on port ${PORT}`);
});

 
// 404 route not found middleware
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});
