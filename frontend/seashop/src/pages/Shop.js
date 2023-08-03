import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
function Shop() {
    const [shop, setShop] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token
            const response = await fetch('http://170.187.229.248:8000/api/Locate/Shop-List', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer' + String(accessToken)
                    'Authorization': 'Bearer ' + String(authTokens.access)

                },
            })
            const jsonData = await response.json()
            console.log(jsonData);
            setShop(jsonData);
        } catch (error) {
            console.log(error);
        }


    }


    return (
        <div className="home-background">
            <Header />
            <div className="body-content">
                <h1>東南亞美食商家清單</h1>
                <p>介紹在台的一些東南亞店家，並介紹特色菜色以利大家交流分享。</p>


                <ul>
                    {shop.map(item => (
                        <li className='book_item' key={item.id}>
                            <div className='book_back'>
                                <div className='book_info'>
                                    <Link to={`http://170.187.229.248:8000/api/Locate/Shop-Detail/${item.id}`} > {item.Name}</Link>
                                    <div className='author'>平均價位：{item.Price}</div>
                                    <div className='publisher'>地址：{item.Address}</div>
                                    <div className='publisher'>代表國家：{item.Country}</div>
                                    <div className='publisher'>評分：{item.Rating}</div>
                                    <div className='ISBN'>介紹:{item.Introduction}</div>
                                    <img src={item.Picture} alt="Book Cover" style={{ width: '200px', heigh: '200px' }} />
                                    <hr />

                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='landing-back'>




            </div>
            <Footer />
        </div>
    )
}


export default Shop