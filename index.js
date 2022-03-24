//ÖVNING 1 index.js + cars.js

//Läs in Express och cars(en array med data om bilar från cars.js)
const express = require('express');
//const res = require('express/lib/response');
const cars = require('./cars.js');

//Generera ett nytt ID för cars-listan
//get new id from array
function getId(){
    //get last item in array
    const lastCar = cars.slice(-1)[0]

    let id = (lastCar?.id);
    id = id ? id + 1 : 1;

    return id;
}


//Initiera express och sätt upp startsidanindex.js (längst ner)Starta servern
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Cars hje hej")
})

app.get('/cars', (req, res) => {
    res.send(cars)
})

//Hämta en bil och hämta många bilar
app.get('/cars/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const car = cars.find(c => c.id === id)
    res.send(car)
})

//Skapa en ny bil
app.post('/cars', (req, res) => {
    const id = getId()

    const newCar = {
        id,
        make: req.body.make,
        model: req.body.model
    }
    cars.push(newCar)
    res.send({id})
})


//Uppdatera en bil och ta bort en bil
//Slutför dessa själv
app.put('/cars/:id', (req,res) => {
    //TODO: update car
})

app.delete('/cars/:id', (req,res) => {
    //TODO: delete car
})

//längst ner, starta servern
app.listen(8000, () => {
    console.log("http://localhost:8000")
})