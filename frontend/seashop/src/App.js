import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home';
import Food from './pages/Food';
import About from './pages/About';
import Shop from './pages/Shop';
import Login from './pages/Login';
import FoodList from './pages/FoodList';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Food/List/${foodID}" element={<FoodList />} />
        </Routes >
      </AuthProvider>
    </Router >

  );
}


export default App;