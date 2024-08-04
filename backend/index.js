const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

// Import models
const eventModel = require('./model/eventData');
const userModel = require('./model/userData'); // Import the user model

require('./connection');
app.use(cors());
app.use(express.json());

// Event Routes
// To fetch all event data
app.get('/events', async (req, res) => {
  console.log('Fetching all events');
  try {
    const data = await eventModel.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// To fetch a single event by eventID
app.get('/events/:eventID', async (req, res) => {
  try {
    const eventID = parseInt(req.params.eventID, 10); // Assuming eventID is numeric
    const event = await eventModel.findOne({ eventID: eventID }); // Query by eventID field
    if (event) {
      res.json(event);
    } else {
      res.status(404).send('Event not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// To create a new event
app.post('/newevent', async (req, res) => {
  try {
    const item = req.body;
    const datasave = new eventModel(item);
    await datasave.save();
    res.send('Post successful');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// To delete a document
app.delete('/eventremoval/:id', async (req, res) => {
  try {
    await eventModel.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// User Routes
// To fetch all users
app.get('/users', async (req, res) => {
  console.log('Fetching all users');
  try {
    const data = await userModel.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// To fetch a single user by userID
app.get('/users/:userID', async (req, res) => {
  try {
    const userID = req.params.userID; // Assuming userID is a string
    const user = await userModel.findOne({ _id: userID }); // Query by _id field
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// To create a new user
app.post('/newuser', async (req, res) => {
  try {
    const item = req.body;
    const datasave = new userModel(item);
    await datasave.save();
    res.send('User added successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// To delete a user
app.delete('/userremoval/:id', async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.send('User deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
