const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
mongoose
.connect(process.env.DATABASE
    , {
    createNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true 
}).then( () => {
    console.log("connected to DATABASE !");
});
const port = process.env.PORT ||  8000 ;

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get("/" , (req , res) => (
    res.send("hey there sarvesh raut!")
))
app.listen(port , (req , res) =>{
    console.log(`server is runnuing at the ${port}` );
})