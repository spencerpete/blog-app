import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/post';
import Post from '../../components/Post/Post';
import Layout from '../../components/Layout/Layout';

export default function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="posts">
        {posts.map((post, index) => {
          return <Post author={post.author} title={post.content} key={index} />;
        })}
      </div>
      ;
    </Layout>
  );
}
