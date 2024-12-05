import mongoose from "mongoose";
// import { MONGO_URI } from "./envData.js";

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (err) {
        console.log("Error in connection in MongoDB", err);
        process.exit(1)
    }
}

export default dbConnect;