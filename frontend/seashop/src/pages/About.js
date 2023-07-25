import Header from '../components/Header';
import Footer from '../components/Footer';
function About() {
    return (
        <div className="home-background">
            <Header/>
                <div className="body-content">
                <h1>東南亞美食搜查</h1>
                <p>這是一個異國聚落與美食介紹的一個網站，不定時推出活動跟更新</p>
                <p>並且歡迎留下到各小店的到訪心得，將會不定時的給予回饋。</p>
                </div>
            <Footer/>
        </div>
    )
}


export default About