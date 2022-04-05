const express = require ('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile("C:/Users/Usuario/Desktop/Proyecto-app/index.html");
});

app.get('/Homescreen',(req, res)=>{
    res.sendFile("C:/Users/Usuario/Desktop/Proyecto-app/index2.html");
});

app.get('/FormContacto',(req, res)=>{
    res.sendFile("C:/Users/Usuario/Desktop/Proyecto-app/index3.html");
})

app.get('/ConocelosP',(req, res)=>{
    res.sendFile("C:/Users/Usuario/Desktop/Proyecto-app/index4.html");
})

app.get('/tramitesDOM',(req, res)=>{
    res.sendFile("C:/Users/Usuario/Desktop/Proyecto-app/index5.html");
})

app.get('/Eventos',(req, res)=>{
    res.sendFile("C:/Users/Usuario/Desktop/Proyecto-app/index6.html");
})

app.listen(5500, (req, res)=>{
    console.log('server inciado en el puerto 5500');
});
