const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('dotenv').config();

// Define the User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

async function createDummyData() {
  try {

    // Create dummy data
    const dummyUsers = [
      {
        firstName: 'Basten',
        lastName: 'Andika',
        email: 'basten@example.com',
        username: 'basten',
        password: '12345678'  // Replace with hashed password
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        username: 'janesmith',
        password: 'hashedpassword2'  // Replace with hashed password
      },
      {
        firstName: 'Mike',
        lastName: 'Johnson',
        email: 'mike.johnson@example.com',
        username: 'mikejohnson',
        password: 'hashedpassword3'  // Replace with hashed password
      }
    ];

    // Hash passwords before saving
    for (const user of dummyUsers) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }

    // Insert dummy users into the database
    await User.insertMany(dummyUsers);
    console.log('Dummy users have been inserted.');
  } catch (err) {
    console.error('Error:', err);
  }
}

createDummyData();
module.exports = mongoose.model('User', userSchema);