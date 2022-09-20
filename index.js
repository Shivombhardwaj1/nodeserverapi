import express from "express"
import { Connection } from "./Database/Connection.js"
import cors from "cors"
import Routes from "./routes/Routes.js"
import bodyParser from 'body-parser';

const app=express()

// const PORT =8000
const PORT =8000;

const URL="mongodb+srv://user1:12345@appointment.bybcbcj.mongodb.net/?retryWrites=true&w=majority"
app.listen(PORT,()=>{
    try {
        console.log(`Server successfully running on Port ${PORT}`)
    } catch (error) {
        console.log("server not running",error)
    }
} )
Connection(URL)

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',Routes)

//heroku
// if (process.env.NODE_ENV == "production"){
//     app.use(express.static("client/build"))
// }
