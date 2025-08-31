import type { ReactNode } from 'react';

import './styles.css';

interface ButtonProps {
  nameButton: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: 'primary' | 'secondary';
  disabled?: boolean;
  onButtonClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  nameButton,
  type,
  className = 'primary',
  disabled = false,
  onButtonClick,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onButtonClick}
      className={className}>
      {nameButton}
    </button>
  );
};

export default Button;
