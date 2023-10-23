import mongoose, { Document, Model, Schema } from "mongoose";
interface ITopicDocument extends Document {
  title: string;
  description: string;
}
interface ITopicModel extends Model<ITopicDocument> {}
const topicSchema = new Schema<ITopicDocument>(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Topic: ITopicModel = mongoose.models.Topic || mongoose.model<ITopicDocument, ITopicModel>("Topic", topicSchema);

export default Topic;
