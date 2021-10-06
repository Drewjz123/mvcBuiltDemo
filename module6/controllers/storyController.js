const model = require('../models/story');

exports.index = (req,res) => {
    // console.log('Is this valid');
     //res.send('Send all stories');
     //res.send(model.find());
     let stories = model.find();
     res.render('./story/index',{stories});
 };
 
 exports.new = (req,res) => {
     res.render('./story/new');
 };

exports.create =  (req,res) => {
    // res.send('Created a new story');

     let story = req.body;
    model.save(story);
     res.redirect('/stories')
    // res.redirect('stories')

 };
 
exports.show =  (req,res)=> {
    let id = req.params.id;
    let story = model.findById(id)

     //res.send(story);
     if(story){
     res.render('./story/shows', {story});
     }else{
     res.status(404).send('Cannot find story with id ' + id)
     }
 };

exports.edit = (req,res)=> {
     //res.send('send the edit form');
     let id = req.params.id;
     let story = model.findById(id);

     if(story){
         res.render('./story/edit', {story});
     }
     else{
         res.send(404).send('Cannot find story with id' + id);
     }
 };
  
exports.update =  (req,res) =>{
     let story = req.body;
    let id = req.params.id;

    if(model.updateById(id, story)){
        res.redirect('/stories/' +id);
    }else{

        res.status(404).send('Cannot find story with id' + id);
    }


 };
 
 
exports.delete =  (req,res) =>{
    let id = req.params.id; 
    if(model.deleteById(id)){
        res.redirect('/stories');
    }else{
        res.status(400).send('Cannot find story with id ' + id);
    }
 };
 