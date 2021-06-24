import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import FormInput from '../../components/FormInput/FormInput';
import TextArea from '../../components/TextArea/TextArea';
import { createPost } from '../../services/post';

const postSchema = {
  author: {
    name: '',
    email: '',
  },
  content: {
    title: '',
    body: '',
  },
};

export default function CreatePost() {
  const [post, setPost] = useState(postSchema);

  const handleChange = e => {
    const { category } = e.target.dataset;
    const { name, value } = e.target;
    let data = { ...post[category], [name]: value };
    setPost({ ...post, [category]: data });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await createPost(post);
  };

  return (
    <div>
      <Layout>
        <form className="form" onSubmit={handleSubmit}>
          <FormInput
            label="Author"
            name="name"
            category="author"
            placeholder="Author"
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            name="email"
            category="author"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <FormInput
            label="Title"
            name="title"
            category="content"
            placeholder="Title"
            onChange={handleChange}
          />
          <TextArea
            label="Body"
            name="body"
            category="content"
            placeholder="Post content..."
            onChange={handleChange}
          />
        </form>
      </Layout>
    </div>
  );
}
