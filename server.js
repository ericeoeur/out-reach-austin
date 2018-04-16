const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const SELECT_ALL_EVENTS_QUERY = 'SELECT * FROM event_listing';
var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
const database = require('firebase'); 

// nightmare
//   .goto("https://duckduckgo.com")
//   .type("#search_form_input_homepage", "alice is cool")
//   .click("#search_button_homepage")
//   .wait("#links a")
//   .evaluate(function() {
//     return document.querySelector("#links a").href;
//   })
//   .end()
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(error) {
//     console.error("Search failed:", error);
//   });

console.log("this is the database");
console.log(database);

nightmare
  .goto("https://www.austinchronicle.com/event-submission/")
  .type("#EventName", "alice is cool")
  // .type("#EventCategory", "Arts: Dance")
  // .type("#EventLocation", "Alice's Center, 3333 Comic Sans Way, Austin, Texas 78743")
  // .type("#EventPubURL", "http://www.alicenelson.com")

  // .type("#EventMediaName", "Alice Nelson")
  // .type("#EventMediaEmail", "Alice@nelson.com")
  // .type("#EventMediaPhone", "666-666-6666")


  // .type("#EventCost", "FREE")
  // .type("#EventDescription", "BLAH BLHA BLAH BLAHB ALBHA BLAHBALHBAL")
  // .type("#FromDate", "06/09/2018")

  // .type("#start-time", "12:00pm")
  // .type("#end-time", "1:00pm")


 // .click("#submit-button")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  

  .then(function(result) {
    console.log(result);
    done();
  });


app.use(cors());


app.listen(4000, () => {
  console.log(`Nightmare server listening on Port 4000`);
});




















// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');
// const app = express();
// const SELECT_ALL_EVENTS_QUERY = 'SELECT * FROM event_listing';

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: '8889',
//   user: 'root',
//   password: 'root',
//   database: 'out-reach-austin_db'
// });

// connection.connect(err => {
//   if (err) {
//     return err;
//   }
// });

// console.log(connection);

// app.use(cors());
// app.get('/', (req, res) => {
//   res.send('go to /events to see events')
// });

// //URL Exmaple to add Event Title, Start Date, Start time, and Long Description 
// //http://localhost:4000/events/add?event_title=test3&start_date=100318&start_time1=3&event_description_long=testdescription3

// //ADDING AN EVENT
// app.get('/events/add', (req, res) => {
//   const { 
//     event_title, 
//     start_date, 
//     start_time1, 
//     event_description_long 
//   } = req.query;
//   //console.log (event_title, start_date, start_time1, event_description_long);
//   const INSERT_EVENTS_QUERY = `INSERT INTO event_listing (event_title, start_date, start_time1, event_description_long) VALUES('${event_title}', ${start_date}, ${start_time1}, '${event_description_long}')`;
//   connection.query(INSERT_EVENTS_QUERY, (err, results) => {
//     if (err) {
//       return res.send(err)
//     }
//     else {
//       return res.send('successfully added event')
//     }
//   });
//   //res.send('adding event'); 
// });

// //GETTING ALL EVENTS
// app.get('/events', (req, res) => {
//   connection.query(SELECT_ALL_EVENTS_QUERY, (err, results) => {
//     if (err) {
//       return res.send(err)
//     }
//     else {
//       return res.json({
//         data: results
//       })
//     }
//   });
// });

// app.listen(4000, () => {
//   console.log(`Products server listening on Port 4000`);
// });

