import { css, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
  }
  html {
    font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const screen = {
  small:(...args) => css`
    @media only screen and (max-width: ${({ theme }) => theme.breakpoint}) {
      ${args}
    }
  `
}
