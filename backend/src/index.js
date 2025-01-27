import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import CreateAccount from './routes/CreateAccountRoute.js';
import SignInAccount from './routes/SignIn.js'
import Verificationstart from './routes/VerificationRoute.js'
import TaskRoute from './routes/TaskRoue.js'
import AllTasks from './routes/AllTasks.js'
import UpdateTaskRoute from './routes/UpdateTaskRoute.js'
import DeleteTaskRoute from './routes/DeleteTaskRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';





dotenv.config()
const app = express()

app.use(cors({
  origin:`${process.env.CLIENTURL}`,
  credentials: true, 
}))

app.use(cookieParser());


mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("mongodb connected successfully");
    
})
.catch((err)=>{
    console.log(err);
    
})





app.use(express.json())

app.use('/CreateAccount',CreateAccount)
app.use('/SignIn',SignInAccount)
app.use('/Dashboard',Verificationstart)
app.use('/Task',TaskRoute)
app.use('/AllTasks',AllTasks)
app.use('/UpdateTask',UpdateTaskRoute)
app.use('/DeleteTask',DeleteTaskRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});