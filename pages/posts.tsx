import Header from '@/components/layout/Header';


import { GetStaticProps } from 'next';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

export default function Posts({ posts }: { posts: PostProps[] }) {
  return (
    <div style={{ padding: '20px' }}>
        <Header />
      <h1>Posts Page</h1>
      {posts.length > 0 ? (
        posts.map((post, index) => <PostCard key={index} {...post} />)
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();


  const posts: PostProps[] = data.map((item: any) => ({
    title: item.title,
    content: item.body,
    userId: item.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};
