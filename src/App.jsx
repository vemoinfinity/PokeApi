import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import ProtectedRoutes from './components/ProtectedRoutes';
import Characters from './components/Characters';
import Areas from './components/Areas';
import CharacterDetails from './components/CharacterDetails';
function App() {
  return (
    <HashRouter>

      <div className="App">

        <Routes>
          <Route path="/" element={<UserLogin />}/>   
          <Route element={<ProtectedRoutes/>}>   
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/charactersdetail" element={<CharacterDetails/>}/>
          <Route path="/areas" element={<Areas/>}/>
            </Route>     
        </Routes>

      </div>

    </HashRouter>
  )
}

export default App
