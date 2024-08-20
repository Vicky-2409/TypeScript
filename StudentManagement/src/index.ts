import express from "express";
import mongoose from "mongoose";
import router from "./routes";

const app = express()
app.use(express.json())
const MONGODB='mongodb://localhost:27017/Student_Management'
mongoose.connect(MONGODB)
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use('/',router)
app.listen(4000, ()=>{
    console.log("Server is running on http://localhost:4000");
})