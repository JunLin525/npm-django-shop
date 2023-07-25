import React/*, { useContext } */from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
//import Authcontext from '../context/AuthContext';
function Header() {
  //  let { user, logoutUser } = useContext(Authcontext)
    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/');
    };

    const handleClickAbout = () => {
        navigate('About/');
    };

    const handleClickNew = () => {
        navigate('/booklist/')
    }

    const handleClickAbstract = () => {
        navigate('/abstract/')
    }
    const handleClickLogin = () => {
        navigate('/login/')
    }

    return (
        <div className='header'>
            <button className='title' onClick={handleClickHome}>首頁在這</button>
            <button className='title' onClick={handleClickAbout}>關於本站</button>
            <button className='title' onClick={handleClickNew}>美食聚落</button>
            <button className='title' onClick={handleClickAbstract}>特色店家</button>
            
            <button className='title' onClick={handleClickLogin}>登入頁面</button>
            
            <br />

        </div>
    )
}
export default Header;