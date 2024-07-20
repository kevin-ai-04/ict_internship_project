const mongoose=require('mongoose');
const eventSchema=mongoose.Schema({
    eventID: Number,
    eventName: String,
    eventArtist: String,
    eventShortDescription: String,
    eventDescription: String,
    eventStartDate: String,
    eventEndDate: String,
    price: Number,
    location: String,
    status: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String
})

const EventData=mongoose.model('event',eventSchema);
module.exports=EventData