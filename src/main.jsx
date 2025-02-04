import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from './infrastructure/contexts/ThemeContext.jsx';
import './index.css'
// import store from './business-logic/store/store.js';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      {/* <ThemeProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </ThemeProvider> */}
    {/* </Provider> */}
  </StrictMode>,
)
