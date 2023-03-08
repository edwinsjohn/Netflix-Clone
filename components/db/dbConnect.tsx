// import { async } from "@firebase/util";
// @ts-ignore
import mongoose from "mongoose";
const connectMongo = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_DATA!);
};

export default connectMongo;
