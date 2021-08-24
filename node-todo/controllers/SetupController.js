var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos',function(req,res){

        var starterTodos = [

            {
                username:"pradeep",
                todo:"Hair Cut",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"pradeep",
                todo:"Shaving",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"yogesh",
                todo:"Home Work",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"yogesh",
                todo:"Exercise",
                isDone:false,
                hasAttachment:false
            }

        ];

        Todos.create(starterTodos,function(err,results){

            res.send(results);
        });
    })
}