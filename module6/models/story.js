const {DateTime} = require("luxon");
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
    
    exports.findById = function(id){
      for(let story in stories){
          if(stories[story].id === id){
              return stories[id -1];
          }
      }
    };

 