const express=require('express');
const app= new express(); //creating an instance 'app' of express
const cors=require('cors');
const PORT=4000;
const eventModel=require('./model/eventData');

require('./connection');
app.use(cors())
app.use(express.json())

//tofetch the event data
app.get('/events',async(req,res)=>{
    console.log('inside')
    try{
        const data=await eventModel.find();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.post('/newevent',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new eventModel(item);
        const saveddata=await datasave.save();
        res.send('Post successful')
    } catch (error) {
        console.log(error)
    }
})


//delete a document
app.delete('/eventremoval/:id',async(req,res)=>{
    try{
        await eventModel.findByIdAndDelete(req.params.id);
        res.send('Deleted successfully')
    } catch(error){
        console.log(error)
    }

})

app.listen(PORT,()=>{
    console.log('Server is running on PORT 4000')
})