import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function Button({ text = 'Click Me', ...props }: ButtonProps) {
  return (
    <button type="submit" className={styles.button} {...props}>
      {text}
    </button>
  );
}
