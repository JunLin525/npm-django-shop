import React, { useContext } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Authcontext from '../context/AuthContext';
function Header() {
    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/');
    };

    const handleClickAbout = () => {
        navigate('/About');
    };

    const handleClickFood = () => {
        navigate('/Food')
    }

    const handleClickShop = () => {
        navigate('/Shop')
    }
    const handleClickLogin = () => {
        navigate('/login')
    }

    return (
        <div className='header'>
            <button className='title' onClick={handleClickHome}>首頁在這</button>
            <button className='title' onClick={handleClickAbout}>關於本站</button>
            <button className='title' onClick={handleClickFood}>美食聚落</button>
            <button className='title' onClick={handleClickShop}>特色店家</button>
            <button className='title' onClick={handleClickLogin}>登入頁面</button>

            <br />

            <br />

        </div>
    )
}
export default Header;