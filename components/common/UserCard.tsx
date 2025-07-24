import { UserProps } from '@/interfaces/index';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default UserCard;