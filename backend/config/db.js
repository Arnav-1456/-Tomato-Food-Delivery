import mongoose from "mongoose";
  export const connectDB= async()=>{
    await mongoose.connect(`mongodb+srv://arnavpriyadrshi3559:Arnav123@cluster0.fg3ppoh.mongodb.net/food-del`).then(()=>console.log("DB connected"))
 }