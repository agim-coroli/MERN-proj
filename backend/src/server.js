import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001

connectDB();

app.use("/api/notes/", notesRoutes)

app.listen(PORT, () => {
    console.log(`Le serveur demarre sur le port http://localhost:${PORT}`);

})

// mongodb+srv://agimcoroli8016_db_user:KfW1Ks03PwcSqDXq@cluster0.ggaawjw.mongodb.net/?appName=Cluster0