import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import * as S from './style'

const Header = (props) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <S.Container>
      <h2>Header</h2>

      <Switch
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.secondary}
        offColor={colors.background}
      />
    </S.Container>
  )
}

export default Header;