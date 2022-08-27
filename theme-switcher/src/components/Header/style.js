import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 60px;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.color};
`