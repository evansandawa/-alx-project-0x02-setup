import Card from "@/components/common/Card";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import { Post } from "../interfaces";
import Header from '@/components/layout/Header';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <div>
        <h1>This is our home page</h1>
        <Card
          title="House Available"
          content="2 bedroom duplex available, 3 months payment upfront"
        />
        <Card
          title="Not Available"
          content="This house is not available for rent"
        />
      </div>
      <button onClick={openModal}>
        Add Post
      </button>
      <PostModal isOpen={isModalOpen} onClose={closeModal} onSubmit={addPost} />
      <div>
        {posts.length === 0 ? (
          <p>Input a post.</p>
        ) : (
          posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))
        )}
        
      </div>
    </div>
  );
}
