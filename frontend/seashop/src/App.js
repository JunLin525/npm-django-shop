import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import PrivateRoute from './utils/PrivateRoute';
//import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home';
import Food from './pages/Food';
import About from './pages/About';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Food/" element={<Food />} />
          <Route path="/About/" element={<About/>}/>
        </Routes>
      </Router>

  );
}


export default App;