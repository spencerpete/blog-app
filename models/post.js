import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    author: {
      name: {
        type: String,
        maxLength: 24,
        required: true,
      },
      email: {
        type: String,
        maxLength: 80,
        required: true,
      },
      bio: {
        type: String,
        maxLength: 240,
      },
    },
    content: {
      title: {
        type: String,
        maxLength: 100,
        required: true,
      },
      body: {
        type: String,
        maxLength: 5000,
        required: true,
      },
      isPublished: {
        type: Boolean,
        default: true,
      },
      publishDate: {
        type: Date,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('posts', Post);
