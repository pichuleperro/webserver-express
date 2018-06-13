const colors = require('colors');
const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// express HBS engine 
hbs.registerPartials(__dirname + '/views/parcials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Amigos',
        anio: new Date().getFullYear()
    });
});

let puerto = process.env.PORT || 8080;

app.listen(puerto, () => {
    console.log(`Escuchando puerto`.blue + ` ${puerto}`.red);
});