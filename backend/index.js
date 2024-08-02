const express = require('express');
const app = express(); //creating an instance 'app' of express
const cors = require('cors');
const PORT = 4000;
const eventModel = require('./model/eventData');

require('./connection');
app.use(cors());
app.use(express.json());

// To fetch all event data
app.get('/events', async (req, res) => {
  console.log('inside');
  try {
    const data = await eventModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// To fetch a single event by eventID
app.get('/events/:eventID', async (req, res) => {
  try {
    const eventID = req.params.eventID;
    const event = await eventModel.findById(eventID); // Assuming eventID is the MongoDB _id
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
    var item = req.body;
    const datasave = new eventModel(item);
    const saveddata = await datasave.save();
    res.send('Post successful');
  } catch (error) {
    console.log(error);
  }
});

// To delete a document
app.delete('/eventremoval/:id', async (req, res) => {
  try {
    await eventModel.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully');
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
