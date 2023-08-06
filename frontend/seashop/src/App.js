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
import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute isLogged={false} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PrivateRoute isLogged={false} />}>
            <Route path="/Food" element={<Food />} />
          </Route>
          <Route element={<PrivateRoute isLogged={false} />}>
            <Route path="/About" element={<About />} />
          </Route>
          <Route element={<PrivateRoute isLogged={false} />}>
            <Route path="/Shop" element={<Shop />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Food/List/${foodID}" element={<FoodList />} />
        </Routes >
      </AuthProvider>
    </Router >

  );
}


export default App;