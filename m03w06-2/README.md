# M03W06 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

### CRUD
* Create
* Read
* Update
* Delete
* a CRUD app

### Embedded JavaScript
* EJS
* allows us to mix HTML and JS
* template literal
* HTML template
* template variables

const name = 'carol'
`hello ${name}`

  <% for () { %> => non-outputting tags (this will not show up in the finished html)
  <%= name %> => output the contents to the html

Forms are the only thing in HTML that can make a POST request


urlencoding
name=bongo%20monkey&breed=monkey&age=3.5

parse => turn from one format to another format
body-parser

{
  name: 'bongo',
  breed: 'monkey',
  age: 3.5
}





