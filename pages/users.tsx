import { GetStaticProps } from 'next';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';
import Header from '@/components/layout/Header'

export default function Users({ users }: { users: UserProps[] }) {
  return (
    <div style={{ padding: '20px' }}>
        <Header />
      <h1>Users Page</h1>
      {users.length > 0 ? (
        users.map((user, index) => <UserCard key={index} {...user} />)
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    const data = await res.json();

    // Map the API response to match UserProps
    const users: UserProps[] = data.map((item: any) => ({
      name: item.name,
      email: item.email,
      address: `${item.address.street}, ${item.address.city}, ${item.address.zipcode}`, // Simplified address
    }));

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [], // Return an empty array as fallback
      },
    };
  }
};