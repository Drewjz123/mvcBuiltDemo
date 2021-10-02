const model = require('../models/story');

exports.index = (req,res) => {
    // console.log('Is this valid');
     //res.send('Send all stories');
     //res.send(model.find());
     let stories = model.find();
     res.render('./story/index',{stories});
 };
 
 exports.new = (req,res) => {
     res.send('Send in the new form');
 };

exports.create =  (req,res) => {
     res.send('Created a new story');
 };
 
exports.show =  (req,res)=> {
    let id = req.params.id;
    let story = model.findById(id)

     //res.send(story);
     if(story){
     res.render('./story/shows', {story});
     }
     res.status(404).send('Cannot find story with id ' + id);
 };

exports.edit = (req,res) => {
     res.send('send the edit form');
 };
  
exports.update =  (req,res) =>{
     res.send('Update story with id' + req.params.id);
 };
 
 
exports.delete =  (req,res) =>{
     res.send('delete story with id' + req.params.id);
 };
 