var configs = require('./config.json');

module.exports = {
    getDBConnectionString: function(){
        

        return "mongodb://"+configs.uname+":"+ configs.pwd+"@localhost:27017/todo-nodejs?authSource=admin";
    }
}