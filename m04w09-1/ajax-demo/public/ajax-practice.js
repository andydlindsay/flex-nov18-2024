console.log('inside ajax-practice.js');

$.ajax({
  method: 'GET',
  url: '/food-items',
  success: (response) => {
    console.log('response', response);
  },
  error: (error) => {
    console.log('error', error);
  }
});
