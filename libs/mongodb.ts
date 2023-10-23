import mongoose, { ConnectOptions } from "mongoose";

const connectMongoDB = async (): Promise<void> => {
  try {
    const mongoURI: string | undefined = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in the environment variables.");
    }

    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions;

    await mongoose.connect(mongoURI, mongooseOptions);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
