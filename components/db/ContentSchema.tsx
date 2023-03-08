// @ts-ignore
import { Schema, model, models } from "mongoose";

export const ContentSchema = new Schema({
  movieName: String,
  duration: String,
  language: String,
  gener1: String,
  gener2: String,
  gener3: String,
  description: String,
  cast: String,
  type: String,
  videoUrl: String,
  imgUrl: String,
  logo: String,
  bg: String,
  match: String,
  censor: String,
  time_stamp: String,
});
const Content = models.Content || model("Content", ContentSchema);

export default Content;
