import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import * as S from './style'

const Header = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <h2>Header</h2>

      <Switch
        onChange={() => { }}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.secondary}
        offColor={colors.background}
      />
    </S.Container>
  )
}

export default Header;