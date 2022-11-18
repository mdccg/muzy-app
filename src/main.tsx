import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import FontStyles from './stylesheets/fonts';
import GlobalStyles from './stylesheets/global';
import PaletteStyles from './stylesheets/palette';
import App from './App';

const rootHTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHTMLElement);
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <FontStyles />
      <GlobalStyles />
      <PaletteStyles />
      <App />
    </BrowserRouter>
  </UserContextProvider>
);