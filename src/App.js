import './assets/all.scss'
import { Route, Routes } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='products' element={<Products />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
