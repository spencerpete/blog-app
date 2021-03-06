import Post from '../models/post.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) throw new Error();
    res.status(200).res.json(post);
  } catch (error) {
    res.status(404).send('Post not found.');
  }
};

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) throw new Error();
    res.status(200).send('Post deleted.');
  } catch (error) {
    res.status(404).send('Post not found');
  }
};
