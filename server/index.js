import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRouter from './routes/posts.js'

const app = express()



app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/posts', postRouter);

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.c39gu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`Server Running on Port : ${PORT}`)))
.catch((err) => console.log(err));

//mongoose.set('useFindAndModify',false);
