import { ButtonHTMLAttributes } from 'react';

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface Post {
  title: string;
  content: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
}