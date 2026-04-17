import mongoose from "mongoose";

export const initMongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Mongo connection successfully established!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
