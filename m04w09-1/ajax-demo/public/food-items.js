console.log('inside food-items.js');

// $('h2'); // find all the h2's on the page
// $('<article>'); // create a new article

// const $h2 = $('<h2>'); // <h2></h2>
// $h2.text('hello'); // <h2>hello</h2>
// $h2.addClass('content'); // <h2 class="content">hello</h2>

// $('<h2 class="content">hello</h2>') // <h2 class="content">hello</h2>

// use jQuery's document ready
$(document).ready(() => {

  const createFoodItem = (foodItemData) => {
    const $foodItem = $(`
      <article class="food-item">
        <header>
          <h2>Name: ${foodItemData.name}</h2>
          <h3>ID: ${foodItemData.id}</h3>
        </header>
  
        <p>Tagline: ${foodItemData.tagline}</p>
  
        <hr/>
  
        <footer>
          <h3>Price: $${foodItemData.price}</h3>
          <h3>Calories: ${foodItemData.calories}</h3>
        </footer>
      </article>
    `);

    return $foodItem;
  };

  // grab the food-item-container from the webpage
  const $foodItemContainer = $('#food-item-container');

  const renderFoodItems = (foodItemDataArr) => {
    for (const foodItemData of foodItemDataArr) {
      const $foodItem = createFoodItem(foodItemData);
      $foodItemContainer.prepend($foodItem); // make it the first child
    }
  };

  const loadFoodItems = () => {
    // make a GET request for the food item data from the server
    $.ajax({
      method: 'GET',
      url: '/food-items',
      success: (foodItemDataArr) => {
        renderFoodItems(foodItemDataArr);
      }
    });
  };

  loadFoodItems();

  // grab the form from the HTML
  const $form = $('#new-food-item-form');

  // listen for the form to submit
  $form.on('submit', (event) => {
    // tell the HTML not to perform it's default behaviour (refresh the page)
    event.preventDefault();
    
    // get the info from the form
    const data = $form.serialize();

    // POST the form data to the server
    $.ajax({
      method: 'POST',
      url: '/food-items',
      data: data,
      success: () => {
        console.log('the food item has been posted to the server');
        
        // GET the food-items from the server again
        loadFoodItems();
      }
    });
  });

});
