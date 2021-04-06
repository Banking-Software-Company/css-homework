import styled from 'styled-components'
import { space } from 'styled-system'

import { screen } from '../theme'

export const NavbarItem = styled.div.attrs(() => ({
  px: 10,
  py: '1.625rem',
  role: 'button',
  tabIndex: 0,
}))`
  ${space};
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.navbar.contrast};
  font-size: ${({ theme }) => theme.space[9]};
  font-weight: 700;
  cursor: pointer;
  ${screen.small(`
    width: 100%;
    `)}
  
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.navbar.hover};
  }
`
