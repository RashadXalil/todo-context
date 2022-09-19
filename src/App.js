import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/Home'
import Todos from './pages/Todos/Todos'
import Complatedtodos from './pages/Complatedtodos/Complatedtodos'
import Addtodo from './pages/Addtodo/Addtodo'

import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<Addtodo />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/complatedtodos" element={<Complatedtodos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
