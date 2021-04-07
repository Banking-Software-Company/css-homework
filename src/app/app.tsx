import { ThemeProvider } from 'styled-components'

import { Navbar } from '../components/navbar'
import { GlobalStyle, theme } from '../components/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  )
}
