<<<<<<< HEAD
var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8080;
var app = express();
var exphb = require("express-handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  //connecting db to node
  var { Client } = require("pg");
  var client = new Client({
    users: "noelwat",
    password: "noel123",
    port: 5432,
    database: "exercise"
  });

  client
    .connect()
    .then(() => console.log("connected to DB"))
    .then(() =>
      client.query("select * from clothesfemale where style_id = $1", [1])
    )
    .then(results => {
      console.table(results.rows);
      res.render("main", { clothes: results.rows });
    })

    .catch(e => console.log(e))
    .finally(() => client.end());
});

//   function createdHandlebars(malePop)
// {
//   var rawtemplate = $("card-img-top")
//   var
// }

// app.get("/hat", (req, res) => {
//   client
//     .connect()
//     .then(() => console.log("connected to DB"))
//     .then(() =>
//       client.query("select * from clothesmale where style_id = $1", [1])
//     )
//     .then(results => {
//       console.log(results);
//       res.json(results);
//     })
//     .catch(e => console.log(e))
//     .finally(() => client.end());
// });

app.listen(port, function() {
  console.log(`Listening to Port: `, port);
});
=======
const express = require('express');
const app = express();
const session = require('express-session');
const setupPassport = require('./passport/passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);
const morgan = require('morgan');
const hb = require('express-handlebars');

// const ClothesService = require('./ClothesService');
// const ClothesRouter = require('./ClothesRouter');

require('dotenv').config();

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

app.engine('handlebars', hb({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(morgan('combined'));

app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false}
}));


// const clothesService = new ClothesService(knex);

// app.use('/api/notes/', (new ClothesRouter(clothesService)).router());



app.use(express.static('public'))
// app.use(express.static('pages'))

app.use(bodyParser());

setupPassport(app);

app.use('/', router);

app.listen(8080, function () {
  console.log(`Application is listening to port 8080`)
});
>>>>>>> 6f0ed2a82308a23c0d18f291762b82778f82b6fa
