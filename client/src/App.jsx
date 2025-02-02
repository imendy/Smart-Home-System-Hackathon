import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/shared/SharedLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
