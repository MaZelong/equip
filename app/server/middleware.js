//var morgan = require('morgan');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var business = require('./routes/business');
var item = require('./routes/item');
var message = require('./routes/message');
var cors = require('cors')


module.exports = function (app, express) {
  //app.use(morgan('dev'));
  app.use(partials());
  app.use(cors());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(express.static(__dirname + '/../client/Client'));
  app.use('/business', express.static(__dirname + '/../client/Business'));
  console.log(__dirname + '/../client/Client');
  app.use(cookieParser('shhhh, very secret'));
  app.use(session({secret: '1234567890QWERTY'}));
  app.use('/api', business);
  app.use('/api', item);
  app.use('/api', message);
};
