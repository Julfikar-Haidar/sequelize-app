const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// router import
const user = require('./routes/user')




const app = express();


app.use(express.json())
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routing
app.use('/api', user)


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});