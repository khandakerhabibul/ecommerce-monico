import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store/store'
import CustomThemeProvider from './Theme/CustomThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
