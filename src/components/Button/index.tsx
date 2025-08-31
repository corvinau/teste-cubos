import { ReactNode } from 'react';

import './styles.css';

interface ButtonProps {
  nameButton: ReactNode;
  onButtonClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ nameButton, onButtonClick }) => {
  return <button onClick={onButtonClick}>{nameButton}</button>;
};

export default Button;
