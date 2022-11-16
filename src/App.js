import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Page404 from './components/Page404'
import Apps from './grammar/Apps'
import History from './history/History'
import English from './English/English'
import Dropdown from './Dropdown'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<Apps />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/english" element={<English />}></Route>
            <Route path="/quiz" element={<Dropdown />}></Route>
            <Route path="/*" element={<Page404 />}></Route>
            {/*<Route path="/*" element={<Navigate to ="/link" />}></Route>*/}
          </Routes>
        </>
      </BrowserRouter>
    </div>
  )
}

export default App
