//Dependencies
const express         = require ( 'express' );
const mongoose        = require ( 'mongoose' );
const app             = express();
const db              = mongoose.connection;

//Environment Variables
const mongoURI        = process.env.MONGODB_URI || 'mongodb://localhost/bookmarkd_app';
const PORT            = process.env.PORT || 3000;

//Set mongoose Promise Library
mongoose.Promise      = global.Promise;

// Connect to Mongo
mongoose.connect ( mongoURI, () => console.log( 'Mongo running at', mongoURI ));

// Error / success
db.on( 'error', ( err ) => console.log( err.message + ' is Mongod not running?' ));
db.on( 'connected', () => console.log( 'mongo connected: ', mongoURI ));
db.on( 'disconnected', () => console.log( 'mongo disconnected' ));

// Open the connection to mongo
db.on( 'open' , () => {
  console.log('Connection made!');
});

// Middleware
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON

// Serve public files
app.use( express.static( 'public' ));

//Routes
// app.get('/', (req, res) => {
//   res.send('hello world');
// })

app.listen( PORT , () =>{
  console.log( 'Server running on port' , PORT);
});
