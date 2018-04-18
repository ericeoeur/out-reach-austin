const express = require('express');
const cors = require('cors');
const app = express();
var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
const firebase = require('firebase');
const axios = require('axios');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');


// ## CORS middleware
// 
// see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



const config = {
  apiKey: "AIzaSyBks8H9WEfUUZgsf2HJ8jTRoCZ3R4vq6eo",
  authDomain: "outreach-austin-db.firebaseapp.com",
  databaseURL: "https://outreach-austin-db.firebaseio.com",
  projectId: "outreach-austin-db",
  storageBucket: "outreach-austin-db.appspot.com",
  messagingSenderId: "876964770583"
};
firebase.initializeApp(config);


// Grab the incoming key from EventDetail.js... i hope this works
app.post('/', function (req, res) {
  console.log(req.body);
  var incomingKey = req.body.incomingKey;
  console.log("Key is: " + incomingKey);


  firebase.database().ref('/events').on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childKey = childSnapshot;
      let test = childKey.val();
      let title = test.event_title;
    })

    //Set your Key in this variable. [0] Determines which one. 
    let key = Object.keys(snapshot.val())[0];

    //grab key from react server and have them call this function. 
    //Key is is the particular Event ID. 

    console.log("Incoming Key is " + incomingKey);
    console.log("Regular Key is " + key);

    let end_time1 = snapshot.child(incomingKey).val().end_time1;
    let event_cost = snapshot.child(incomingKey).val().event_cost;
    let event_description_long = snapshot.child(incomingKey).val().event_description_long;
    let event_link = snapshot.child(incomingKey).val().event_link;
    let event_location = snapshot.child(incomingKey).val().event_location;
    let event_organizer = snapshot.child(incomingKey).val().event_organizer;
    let event_title = snapshot.child(incomingKey).val().event_title;
    let event_type = snapshot.child(incomingKey).val().event_type;
    let image_link = snapshot.child(incomingKey).val().image_link;
    let start_date = snapshot.child(incomingKey).val().start_date;
    let start_time1 = snapshot.child(incomingKey).val().start_time1;

    //Insert your key from the React EventDetail.js file where "-LAL459TtE_gpBLN7H95" is below
    if (incomingKey) {
      console.log("correct");
      Nightmare({ show: true })
        .goto("https://www.austinchronicle.com/event-submission/")
        .type("#EventName", event_title)
        .type("#EventCategory", "Arts: Dance")
        .type("#EventLocation", event_location)
        .type("#EventPubURL", event_link)
        .type("#EventMediaName", event_organizer)
        .type("#EventMediaEmail", "vitemb@gmail.com")
        .type("#EventMediaPhone", "817-992-5608")
        .type("#EventCost", event_cost)
        .type("#EventDescription", event_description_long)
        // .type("#FromDate", start_date)
        // .type("#start-time", start_time1)
        // .type("#end-time", "1:00pm")
        // .click("#submit-button")
        .wait("#EventDescription")
        // .evaluate(function () {
        //   return document.querySelector("#links a").href;
        // })
        //.end()

        .then(function (result) {
          console.log(result);
          done();
        });
    } else {
      console.log("incorrect");
    }


  })

});

app.listen(port, () => {
  console.log(`Nightmare server listening on Port` + port);
});



// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// var ref = firebase.app().database().ref('events');
// let eventsRef = ref.child('events');

// ref.once('value')
//  .then(function (snap) {
//  console.log('snap.val()', snap.val().getKey());
//  console.log("Thisis the key " + eventsRef.getKey());
//  });

// var eventsRef = firebase.app().database().ref('events');
// eventsRef.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childData = childSnapshot.val();
//       var key = snapshot.getKey();
//       console.log(key);
//     });
// });

//app.use(cors());

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
