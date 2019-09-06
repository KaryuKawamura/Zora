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
