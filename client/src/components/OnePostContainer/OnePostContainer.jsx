import './OnePostContainer';
import { deletePost } from '../../services/post';
export default function OnePostContainer(props) {
  return (
    <>
      <div className="one-post-container">
        <div className="one-post-title-card">
          <div className="one-post-title">{props.title}</div>
          <div className="one-post-author">{`By ${props.author}`}</div>
        </div>
        <div className="one-post-content">{props.body}</div>
        <div className="one-post-buttons">
          <button className="one-post-edit">Edit</button>
          <button className="one-post-delete" onClick={() => deletePost(props._id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
