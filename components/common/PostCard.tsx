import { PostProps } from '../../interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p><small>Posted by User ID: {userId}</small></p>
    </div>
  );
};

export default PostCard;