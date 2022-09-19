import mongoose from "mongoose"


export const Connection =async (URL)=>{
    try {
        
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Successfully connected to the databaseee!!!")
    } catch (error) {
        console.log("Error while connecting to the database!!",error)
    }
}