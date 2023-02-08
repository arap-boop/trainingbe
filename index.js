import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import UserRoute from "../backend/routes/UserRoute"

const port = 5000

const app = express();
mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const db = mongoose.connection;
db.on('error', (error)=>console.log(error));
db.once('open', ()=> console.log('Database connected...'));

app.use(cors());
app.use(express.json());


app.listen(5000, () => console.log('server is listening on port...'))
