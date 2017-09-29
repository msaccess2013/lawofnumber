module.exports = function(app){
    var phoneNumber = require('../controllers/phone.controller') 
    app.get('/phone/:phoneNumber', phoneNumber.pairs)
}