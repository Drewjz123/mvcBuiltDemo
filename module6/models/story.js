const {DateTime} = require("luxon");
const {v4: uuidv4} = require('uuid');
const stories = [
    {
        id: '1',
        title: 'A funny story',
        content: 'ther hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot .',

        author: 'Alpha Romeo',
        createdAt:DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
        //createdAt: DateTime.DATETIME_SHORT
    },
    {
        id: '2',
        title: 'It is rainy',
        content: 'ther hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot ',
        author: 'Harsh',
        createdAt: DateTime.local(2021,10,1,18,0).toLocaleString(DateTime.DATETIME_SHORT)
    }
];

    exports.find = () => stories;
    
    // exports.findById = findById;
    // function findById(id){
    //     for(let story in stories){
    //         if(stories[story].id === id){
    //             return stories[id -1];
    //         }
    //     }
       
    //   };
    // exports.findById = findById;
    // function findById(id){
    //     stories.forEach(story => story.id === id){
    //         return
    //     }
    // }

    exports.findById = id => stories.find(story => story.id === id);

    exports.save = function(story){
        story.id = uuidv4();
        story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
        stories.push(story);

    };
    
    exports.updateById = function(id, newStory){
        let story = stories.find(story => story.id === id);
       if(story){
        story.title = newStory.title;
        story.content = newStory.content;
        return true;
       }
       else{
           return false;
       }

    }

    exports.deleteById = function (id){
        let index = stories.findIndex(story => story.id === id);

        if(index !== -1){
            stories.splice(index,1);
            return true;
        }else{
            return false;
        }
    }