import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

export default function About() {
  return (
    <div>
      <Header />
      <h1>This is our about section</h1>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Button size="small" shape="rounded-sm">Small Rounded-SM</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-MD</Button>
        <Button size="large" shape="rounded-full">Large Rounded-Full</Button>
      </div>
    </div>

  );
}


