var express = require('express'), json = require('express-json');

var engines = require('consolidate')
var morgan = require('morgan')
var compression = require('compression')
var bodyParser = require('body-parser')




module.exports = function(){
    var app = express()

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'))
    }else{
        app.use(compression)
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(bodyParser.json())

    app.engine('hbs', engines.handlebars)
    app.set('views', './app/views')
    app.set('view engine', 'hbs')


    require('../app/routes/index.routes')(app)
    require('../app/routes/phone.routes')(app)

    app.use(express.static('./public'))
    return app
}