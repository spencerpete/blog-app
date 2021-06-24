import { useState, useEffect } from 'react';
import './PostDetail.css';
import Layout from '../../components/Layout/Layout';
import { getOnePost } from '../../services/post';
import { useParams } from 'react-router-dom';
import OnePostContainer from '../../components/OnePostContainer/OnePostContainer';

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getOnePost(id);
      setPost(res);
      setLoaded(true);
    };
    fetchData();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className="one-post-container">
        <OnePostContainer
          _id={post._id}
          author={post.author.name}
          title={post.content.title}
          body={post.content.body}
        />
      </div>
    </Layout>
  );
}
