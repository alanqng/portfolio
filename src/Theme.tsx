import { ThemeProvider } from 'styled-components';

import theme from "./themes/default";
import GlobalStyles from './GlobalStyle';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;