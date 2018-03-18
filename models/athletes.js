const mongoose = require ( 'mongoose' );

const athleteSchema = mongoose.Schema({
  name: String,
  dateOfBirth: String,
  nationality: String,
  location: String,
  association: String,
  team: String,
  gender: String,
  sports: [String],
  about: String,
  interests: String,
  charities: String,
  socialMediaHandles: [String],
  pets: String,
  drinksAlcohol: Boolean,
  married: Boolean,
  profileImage: String
});

module.exports = mongoose.model ('Athlete' , athleteSchema);
