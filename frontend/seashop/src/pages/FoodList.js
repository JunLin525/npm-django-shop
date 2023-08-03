import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Headerr from '../components/Headerr';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function AbstractDetail() {
    const navigate = useNavigate()
    const { abstractID, commentID } = useParams()
    const [book, setBook] = useState({})
    const [comments, setComments] = useState([])
    const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token

    useEffect(() => {
        let getNote = async () => {
            const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token

            const response = await fetch(`http://170.187.229.248:8000/NewBook/detail/${abstractID}`, {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer' + String(accessToken)
                    'Authorization': 'Bearer ' + String(authTokens.access)

                },
            })

            const data = await response.json()
            setBook(data)
            window.scrollTo(0, 0);

        }

        getNote()
    }, [abstractID])

    useEffect(() => {
        let getComment = async () => {
            const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token

            const response = await fetch(`http://170.187.229.248:8000/NewBook/comment`, {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)

                },
            })
            const commentData = await response.json();
            setComments(commentData);
        };

        getComment()
    }, [])



    let handleChange = (value) => {
        setBook(book => ({ ...book, 'Abstract': value }))
        console.log('hanle chcange', book)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token
        const article = book.pk
        const title = e.target.title.value
        const author = jwt_decode(authTokens.access).user_id
        const text = e.target.comment.value
        const comment = {
            article,
            title,
            author,
            text,
        };
        try {
            const response = await fetch(`http://170.187.229.248:8000/NewBook/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)

                },

                body: JSON.stringify(comment)
            })
            if (response.ok) {
                alert('Suceess submit!')
                navigate(`/abstract/`)
                // 评论发送成功，执行相应的操作
            } else {
                // 评论发送失败，处理错误情况
                alert('Failed to send comment');
            }
        } catch (error) {
            console.error('Error sending comment:', error);
        }

    };



    return (
        <div className='landing-background'>
            <Headerr />
            <div className='content'>
                <br />
                <h1>讀書摘要</h1>
                <h4>{book.Abstract}</h4>
                <img src={book.Cover} alt="Book Cover" style={{ width: '500px', heigh: '500px' }} />
                <br />
                <hr />
                <h2>留言區</h2>
                <ul>
                    {comments.map(comment => {
                        if (book.pk === comment.article) {
                            return (
                                <li key={comment.pk}>
                                    <h6>{comment.pk}</h6>
                                    <h4><Link to={`/commentDetail/${comment.pk}`}>{comment.title}</Link></h4>
                                    <h5>{comment.text}</h5>
                                    <hr />

                                </li>
                            )
                        } else {
                            return null
                        }
                    })}
                </ul>

            </div>
            <h3>新增留言</h3>
            <form onSubmit={handleSubmit} >
                <input
                    type="commentTitle"
                    name="title"
                    placeholder="新增留言標題" />
                <br />

                <textarea className='textarea'
                    name='comment'
                    placeholder="新增留言內容"
                    value={comments.text} />

                <br />
                <input type="submit" />

            </form>



            <div className='landing-back' />
            <Footer />
        </div>

    )
}

export default AbstractDetail;