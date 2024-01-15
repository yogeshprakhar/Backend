import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // this showing error
    // const connectionInstance = await mongoose.connect(
    //   `${process.env.MONGODB_URI}/${DB_NAME}`
    // );
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB connected !! HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MonogoDB connection Error ", error);
    process.exit(1);
  }
};

export default connectDB;
