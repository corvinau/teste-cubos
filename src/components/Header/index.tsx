import { useTheme } from '../../context/ThemeContext.tsx';

import Button from '../Button';

import { Logo } from '../../assets/logo-cubos.tsx';

import './styles.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='header-container'>
      <div className='header-container-logo'>
        <Logo />
        <div className='header-container-name'>Movies</div>
      </div>
      <div className='header-container-button'>
        <Button
          onButtonClick={toggleTheme}
          nameButton={
            theme === 'light' ? (
              <img src='src/assets/icons/moon.svg' alt='Tema escuro' />
            ) : (
              <img src='src/assets/icons/sun.svg' alt='Tema claro' />
            )
          }
        />
      </div>
    </div>
  );
};

export default Header;
