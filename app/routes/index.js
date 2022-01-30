const translate_routes = require('./translate_routes');
module.exports = function(app){
    translate_routes(app);
}