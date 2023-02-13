const express = require('express');
const dotenv = require('dotenv').config();
const expressejs = require('express-ejs-layouts');


// express server init

const app = express();


app.use(express.json());
app.use(express.urlencoded( { extended : false }));





// temp manege system
app.set("view engine", "ejs");
app.use(expressejs);
app.set("layout", "app/layout");




const PORT = process.env.SERVER_PORT || 4000;


app.listen(PORT, () =>{
    console.log(`server is runing ${PORT}`);
});
