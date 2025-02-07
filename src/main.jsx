import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './assets/style.css';
import { Provider } from 'react-redux'; // Importera Provider från Redux
import store from './store/store.js'; // Importera din Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Lägg till Provider här */}
      <App />
    </Provider>
  </StrictMode>
);
