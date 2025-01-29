# M04W09 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript and XML
* eXtensible Markup Language
* AJAJ
* JavaScript makes the request and receives the response
* XMLHTTPRequest object (XHR)

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  method: 'GET',
  url: 'http://www.google.com',
  success: (response) => {
    console.log('server said', response);
  },
  error: (error) => {
    console.log('bad stuff happened', error);
  }
});
```

name=name&tagline=tagline&price=4.99&calories=500













