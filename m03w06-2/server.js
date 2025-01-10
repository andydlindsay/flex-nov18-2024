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

  // console.log(pets);

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

// Not covered during lecture
// Update 
// GET /pets/:petId/edit
app.get('/pets/:petId/edit', (req, res) => {
  // grab the petId from the url parameters
  const petId = req.params.petId;

  // create a templateVars object with the current pet information
  const pet = pets[petId];
  const templateVars = {
    pet: pet
  };

  // render the edit form
  res.render('edit-form', templateVars);
});

// POST /pets/:petId/edit
app.post('/pets/:petId/edit', (req, res) => {
  // grab the pet id from the url parameters
  const petId = req.params.petId;

  // retrieve the pet from the pets object
  const pet = pets[petId];

  // update the object with the information from the body
  pet.name = req.body.name;
  pet.breed = req.body.breed;
  pet.age = Number(req.body.age); // convert the age string to a number

  // redirect the user back to /pets
  res.redirect('/pets');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
