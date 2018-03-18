const express           = require ( 'express' );
const athletes          = express.Router();
const Athlete           = require ( '../models/athlete.js' );

// INDEX
athletes.get ( '/' , async ( req , res ) => {
  try {
    const allAthletes = await Athlete.find();
    res.status( 200 ).json( allAthletes );
  } catch ( error ) {
    res.status( 400 ).json({error : err.message});
  }
});

//CREATE
athletes.post ( '/' , async ( req , res ) => {
  try {
    const newAthlete = await Athlete.create( req.body );
    res.status( 200 ).json( newAthlete );
  } catch ( error ) {
    res.status( 400 ).json({error : err.message});
  }
});

module.exports = athletes;
