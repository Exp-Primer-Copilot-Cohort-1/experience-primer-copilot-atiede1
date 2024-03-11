// create a web server
// create a route for /comments 


const express = require('express');
const app = express();
const port = 3000;

// route for /comments
app.get('/comments', (req, res) => {
  res.send('This is a route for /comments');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Run the server using node comments.js and visit http://localhost:3000/comments in your browser. You should see the message This is a route for /comments. 

// Now you have a server with a route for /comments. You can add more routes to the server by creating more app.get or app.post calls.
