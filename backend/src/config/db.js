import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("CONNEXION MONGODB REUSSI");
        
    } catch (error){
        console.error("erreur de connexion a mongodb", error);
        process.exit(1); // exit with failure
    }
};