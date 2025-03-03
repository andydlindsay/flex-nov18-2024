# M01W01 - The Dev Workflow

### To Do
- [x] Example problem workflow
- [x] Problem solving tips
- [x] Review git workflow

### Tips

* Work incrementally, writing and then executing small amounts of code
  * Break the problem down into a series of smaller (and easier to understand) steps
  * Small segments of code allow us to more easily see where errors/bugs are in our code
* Use proper indentation
  * Indentation helps us to see how our code is nested (eg. which lines of code are inside the function or if statement)

  ```js
  // no indentation
  const printArray = function (arr) {
  arr.forEach(function(element) {
  console.log(element);
  });
  };
  console.log('All done!');

  // proper indentation
  const printArray = function (arr) {
    arr.forEach(function(element) {
      console.log(element);
    });
  };
  console.log('All done!');
  ```

* Try to avoid copy/pasting code; type it out for yourself and try to understand what you are typing
* Errors are your friend
  * Try to decipher the error message before you Google it
  * Errors help to show us where we made a mistake and being able to read them is a valuable skill

### Logic Syntax Data (LSD)

- Logic: have I told the computer exactly what to do?
- Syntax: am I missing a curly brace?
- Data: do I have the data I think I do in the format I expect?

### Asking For Help

* Remember the 15 minute rule
* Typical research path: 
  * **Google** the error message/what you want to accomplish; make sure to add the programming language (eg. JavaScript) to your search term (eg. "remove elements from array javascript")
  * **StackOverflow** is useful for seeing multiple possible solutions to a problem (DO NOT copy and paste)
  * **Mozilla Developer Network (MDN)**... read the documentation

### Git Workflow

* To create a git repository in a directory, run `git init`
* `git status` will show you which files have been changed in the working directory
* Use `git diff` to see what specifically was changed inside each file
* To add files to the staging area, use `git add <filename>` or `git add .` to add all changes
* Commit your changes using `git commit -m 'a meaningful commit message'`
* Finally, push your code to github using `git push origin master` or `git push origin main`

**NOTE:** This workflow is great for solo coding projects. When you work as part of a team (such as during mid-terms and finals), you will use a more advanced workflow.

### Useful Links
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [Node Documentation](https://nodejs.org/en/docs/)
