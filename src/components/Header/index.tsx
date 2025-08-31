import { useTheme } from '../../context/ThemeContext.tsx';

import Button from '../Button';

import { Logo } from '../../assets/LogoCubos.tsx';
import { Moon } from '../../assets/icons/Moon.tsx';
import { Sun } from '../../assets/icons/Sun.tsx';

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
          nameButton={theme === 'light' ? <Moon /> : <Sun />}
        />
      </div>
    </div>
  );
};

export default Header;
