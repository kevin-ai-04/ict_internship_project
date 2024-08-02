const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const eventModel = require('./model/eventData');

require('./connection');
app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
