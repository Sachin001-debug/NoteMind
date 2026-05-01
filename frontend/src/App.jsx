import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import UnkownRoute from './components/UnkownRoute'

const App = () => {
  return (
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>


    <Route path='*' element={<UnkownRoute/>}/>
   </Routes>
  
  )
}

export default App
