import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { screen } from '../theme'

export const NavbarItem = styled.div.attrs(() => ({
  px: 10,
  role: 'button',
  tabIndex: 0,
}))`
  ${space};
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.navbar.contrast};
  font-size: ${({ theme }) => theme.fontSize.navbarNormal};
  font-weight: 700;
  cursor: pointer;
  ${screen.medium(css`
    flex: 1;
    padding-left: ${({ theme }) => theme.space[0]};
    padding-right: ${({ theme }) => theme.space[0]};
    font-size: clamp(${({ theme }) => `${theme.fontSize.navbarMin}, 3.5vw, ${theme.fontSize.navbarNormal}`});
    `)}
  
  ${screen.small(css`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.navbarNormal};
    `)}
  
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.navbar.hover};
  }
`
