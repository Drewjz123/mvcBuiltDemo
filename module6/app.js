// require modules 
const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');
const storyRoutes = require('./routes/storyRoutes');
//conts uuid = 
const methodOverride = require('method-override');

//const controller = require('./controllers/storyController');


// Create App
const app = express();



// Configure App 
const port = 3000;
const host = 'localhost';
app.set('view engine', 'ejs');

//  Mount Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

// Setup Routes
app.get('/', (req,res) => {
    res.render('index');
});


app.use('/stories', storyRoutes);



// Start the server
app.listen(port, host, () => {
console.log('The server is running on port', port);
});

