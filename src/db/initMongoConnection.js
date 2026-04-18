import mongoose from "mongoose";

export const initMongoConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is undefined");
    }

    await mongoose.connect(uri);
  } catch (error) {
    console.error("Mongo connection error:", error);
    throw error;
  }
};
