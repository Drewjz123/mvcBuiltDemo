const express = require('express');

const router = express.Router();

//GET /stories: send all stories

router.get('/', (req,res) => {
   // console.log('Is this valid');
    res.send('Send all stories');
});

//GET /stories/new:  send the new form for the stories

router.get('/new',(req,res) => {
    res.send('Send in the new form');
});


//POST /stories: create a new story

router.post('/', (req,res) => {
    res.send('Created a new story');
});


//GET /stories/:id: send details of story identified by id

router.get('/:id', (req,res)=> {
    res.send('send story with id ' + req.params.id);
});

//GET /stories/:id/edit : send html form for editing an existing story
router.get('/:id/edit', (req,res) => {
    res.send('send the edit form');
});

//PUT /stories/:id: update story identified by id 

router.put('/:id', (req,res) =>{
    res.send('Update story with id' + req.params.id);
});

//Delete /stories/:id, delete the story identified by id 

router.delete('/:id', (req,res) => {
    res.send('delete story with id' + req.params.id);
});

module.exports = router;