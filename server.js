const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./api/route/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.use(router);
app.listen(3000, ()=>{
    console.log(`server listening on port number 3000`)
})