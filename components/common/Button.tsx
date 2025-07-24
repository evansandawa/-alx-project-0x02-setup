import { type ButtonProps } from '@/interfaces/index';
import styles from '@/components/common/Button.module.css';

const Button = ({ size, shape, children, ...rest }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[shape]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;