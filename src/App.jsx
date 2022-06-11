import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import PrivateRoute from './auth/Routes/PrivateRoute'
import SignIn from './auth/SignInScreen/SignIn'
import InnerContent from './containers/InnerContent/InnerContent'
import StoreItems from './containers/StoreItems/StoreItems'
import Cart from './containers/Cart/Cart'
import {
  CART_ROUTE,
  HOME_ROUTE,
  PRODUCT_ITEM_ROUTE,
  // STORE_ITEMS_CHILDREN_ROUTE,
  PRODUCTS_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from './routes/routes'
import PublicRoute from './auth/Routes/PublicRoute'
import Home from './containers/Home/Home'
import Product from './containers/StoreItems/Product'
import SignUpScreen from './auth/SignUp/SignUpScreen'

function App() {
  return (
    <Box>
      <Routes>
        <Route path={HOME_ROUTE} element={<PublicRoute />}>
          <Route index path={HOME_ROUTE} element={<Home />} />
          <Route path={SIGN_IN_ROUTE} element={<SignIn />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUpScreen />} />

          <Route path={PRODUCTS_ROUTE} element={<StoreItems />} />
          <Route path={PRODUCT_ITEM_ROUTE} element={<Product />} />

          <Route path={CART_ROUTE} element={<PrivateRoute />}>
            <Route path={CART_ROUTE} element={<InnerContent />}>
              <Route path={CART_ROUTE} element={<Cart />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Box>
  )
}

export default App
