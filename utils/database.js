import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB is already connected (via mongoose.connection).");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "User",
      maxPoolSize: 10, // Adjust as needed
    });

    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection failed");
  }
};
