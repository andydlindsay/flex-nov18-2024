const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 5000;

const pets = require('./data/pets');

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // create and populate req.body

// Read
// GET /pets
app.get('/pets', (req, res) => {
  const templateVars = {
    pets: pets,
  };

  res.render('pets', templateVars);
});

// Create
// GET /pets/new
app.get('/pets/new', (req, res) => {
  res.render('new-pet');
});

// POST /pets
app.post('/pets', (req, res) => {
  const name = req.body.name;
  const breed = req.body.breed;
  const age = Number(req.body.age); // convert the age string to a number

  // create a new pet object
  const id = 'pet5';

  const newPet = {
    id: id,
    name: name,
    breed: breed,
    age: age,
  };

  // update the pets object with our new pet
  pets[id] = newPet;

  console.log(pets);

  // every successful POST request should end in a redirection
  // POST-REDIRECT-GET pattern
  res.redirect('/pets');
});

// Delete
// POST /pets/:petId
app.post('/pets/:petId', (req, res) => {
  // url parameter
  const petId = req.params.petId;

  // remove the pet from the pets object
  delete pets[petId];

  // send them to the homepage /pets
  res.redirect('/pets');
});



// Update

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
