const express = require ('express');
const res = require('express/lib/response');
const app = express();

app.listen(5500, (req, res)=>{
    console.log('server inciado en el puerto 5500');
});
