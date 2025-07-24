import { useState } from 'react';
import { PostModalProps } from '../../interfaces';

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div>
      <div>
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
            />
          </div>
          <div>
            <button type="submit">
              Post
            </button>
            <button type="button"> 
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;