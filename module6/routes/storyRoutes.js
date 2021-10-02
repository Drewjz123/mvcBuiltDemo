const express = require('express');
const controller = require('../controllers/storyController');

const router = express.Router();

//GET /stories: send all stories

router.get('/', controller.index);

//GET /stories/new:  send the new form for the stories

router.get('/new', controller.new);


//POST /stories: create a new story

router.post('/', controller.create);

//GET /stories/:id: send details of story identified by id

router.get('/:id', controller.show);

//GET /stories/:id/edit : send html form for editing an existing story
router.get('/:id/edit', controller.edit);

//PUT /stories/:id: update story identified by id 

router.put('/:id', controller.update);

//Delete /stories/:id, delete the story identified by id 

router.delete('/:id', controller.delete);

module.exports = router;