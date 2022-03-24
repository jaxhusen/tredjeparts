//grabbing the main express module, this is a function that works with the app variable
const express = require('express');
//you can create multiple apps this way, each with its own req and res.
const app = express();


//The next() call tells the middleware to go to the next middleware function if there is one.
//This is important to include at the end of our function - otherwise, the request will get stuck on this middleware.
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

//We can optionally pass a path to the middleware, which will only handle requests to that route. For example:
//By passing '/request-type' as the first argument to app.use(), this function will only run for requests sent to localhost:3000/request-type.
app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});


//These lines of code is where we tell our Express server how to handle a GET request to our server. Express includes similar functions for POST, PUT, etc. using app.post(...), app.put(...), etc.
//These functions take two main parameters. The first is the URL for this function to act upon. In this case, we are targeting '/', which is the root of our website: in this case, localhost:3000.
//req represents the request that was sent to the server; We can use this object to read data about what the client is requesting to do.
//res represents the response that we will send back to the client.
app.get('/', (req, res) => {
    res.send('Succesful response')
})

//e are passing 3000 into the listen function, which tells the app which port to listen on.
//The function passed in as the second parameter is optional and runs when the server starts up.
app.listen(3000, () => console.log('example app is listening to http://localhost:3000'))