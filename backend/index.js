// Updated index.js

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

// Import models
const eventModel = require('./model/eventData');
const userModel = require('./model/userData');

require('./connection');
app.use(cors());
app.use(express.json());

// Event Routes

// Fetch all events
app.get('/events', async (req, res) => {
    console.log('Fetching all events');
    try {
        const data = await eventModel.find();
        res.json(data);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Fetch a single event by eventID
app.get('/events/:eventID', async (req, res) => {
    try {
        const eventID = parseInt(req.params.eventID, 10);
        const event = await eventModel.findOne({ eventID: eventID });
        if (event) {
            res.json(event);
        } else {
            res.status(404).send('Event not found');
        }
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new event
app.post('/newevent', async (req, res) => {
    try {
        const item = req.body;

        // Validation example (ensure required fields are present)
        if (!item.eventName || !item.eventArtist || !item.eventStartDate || !item.eventEndDate) {
            return res.status(400).send('Missing required fields');
        }

        const datasave = new eventModel(item);
        await datasave.save();
        res.send('Event added successfully');
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete an event by eventID
app.delete('/events/:eventID', async (req, res) => {
  try {
      const eventID = parseInt(req.params.eventID, 10); // Ensure eventID is numeric
      await eventModel.findOneAndDelete({ eventID: eventID });
      res.send('Deleted successfully');
  } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).send('Internal Server Error');
  }
});


// To update an event by eventID
app.put('/events/:eventID', async (req, res) => {
  try {
      const eventID = parseInt(req.params.eventID, 10); // Ensure eventID is numeric
      const updateData = req.body;

      // Validation example
      if (!updateData.eventName || !updateData.eventArtist || !updateData.eventStartDate || !updateData.eventEndDate) {
          return res.status(400).send('Missing required fields');
      }

      const updatedEvent = await eventModel.findOneAndUpdate(
          { eventID: eventID }, // Find event by eventID
          updateData,            // Update with the provided data
          { new: true }          // Return the updated document
      );

      if (updatedEvent) {
          res.send('Event updated successfully');
      } else {
          res.status(404).send('Event not found');
      }
  } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).send('Internal Server Error');
  }
});


// User Routes

// Fetch all users
app.get('/users', async (req, res) => {
    console.log('Fetching all users');
    try {
        const data = await userModel.find();
        res.json(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Fetch a single user by userID
app.get('/users/:userID', async (req, res) => {
    try {
        const userID = req.params.userID;
        const user = await userModel.findOne({ _id: userID });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new user
app.post('/newuser', async (req, res) => {
    try {
        const item = req.body;

        // Validation example
        if (!item.username || !item.email) {
            return res.status(400).send('Missing required fields');
        }

        const datasave = new userModel(item);
        await datasave.save();
        res.send('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete a user by ID
app.delete('/userremoval/:id', async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.send('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

// Update a user by userID
// app.put('/users/:userID', async (req, res) => {
//   try {
//       const userID = req.params._id;
//       const updateData = req.body;

//       const updatedUser = await userModel.findByIdAndUpdate(_id, updateData, { new: true });

//       if (updatedUser) {
//           res.send('User updated successfully');
//       } else {
//           res.status(404).send('User not found');
//       }
//   } catch (error) {
//       console.error('Error updating user:', error);
//       res.status(500).send('Internal Server Error');
//   }
// });

app.put('/users/:userID', async (req, res) => {
    try {
      const userID = req.params.userID;
      const updateData = req.body;
  
      // Perform the update operation
      const updatedUser = await userModel.findByIdAndUpdate(userID, updateData, { new: true });
  
      if (updatedUser) {
        res.json(updatedUser); // Send back the updated user
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
