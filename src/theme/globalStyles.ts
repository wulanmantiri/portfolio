import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1em;
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scrollbar-color: ${({ theme }) => theme.colors.highlightBlue} ${({
  theme,
}) => theme.colors.oddSection};
    scrollbar-width: thin;
  }
  body::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.colors.oddSection};
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.highlightBlue};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  textarea:focus,
  button:focus,
  input:focus {
    outline: none;
  }
`
