import './Post.css';
import { Link } from 'react-router-dom';

const Post = props => {
  return (
    <>
      <Link clasname="post" to={`/posts/${props.id}`}>
        <div className="authorName">{props.author.name}</div>
        <div className="title">{props.content.title}</div>
      </Link>
    </>
  );
};

export default Post;
