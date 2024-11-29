require('dotenv').config();
const cors=require('cors')
const express=require('express')
const mongoose=require('mongoose')
const userRoute=require('./routes/userRoute')

const app=express();
app.use(express.json());
app.use(cors({
    orgin:'*',
}))

const port=process.env.PORT;
const mongouri=process.env.MONGO_URI;

mongoose.connect(mongouri)
    .then(()=>console.log('connection established successfully'))
    .catch((err)=>console.log('Error in Establishing connection',err))

app.use('/portfolio/users',userRoute)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
