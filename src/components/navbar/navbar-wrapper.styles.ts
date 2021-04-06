import styled from 'styled-components'

import { screen } from '../theme'

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.navbar.background};
  ${screen.small(`
    flex-direction: column;
    `)}
`
