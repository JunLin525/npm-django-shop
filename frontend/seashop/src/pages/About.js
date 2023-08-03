import Header from '../components/Header';
import Footer from '../components/Footer';
function About() {
    return (
        <div className="home-background">
            <Header />
            <div className="body-content">
                <h1>東南亞美食搜查</h1>
                <p>網站簡述:
                    主要使想建立一個可以讓使用者找尋一些東南亞的據點跟店家，並作為一個小的分享平台讓使用者可以相互交流據點資訊跟特色店家資料。
                    <br />
                    <h4>A、網頁主要分成幾個大頁面</h4>
                    <ol>
                        <li>頁面初衷</li>
                        <li>2. 網站介紹</li>
                        <li>東南亞聚落</li>
                        <li>東南亞店家</li>
                        <li>登入登出頁面</li>
                    </ol >
                    <h4> B、網頁預期使用</h4>

                    <h5>主要會希望使用者可以透過這個網站做出下列行為</h5>
                    <ol>
                        <li> 一個喜歡探詢東南亞社群與聚落的人。</li>
                        他可以藉由這個網站進到一些東南亞移民工的聚落，並且在那邊找尋自己喜愛的飲食跟文化，更認識台灣不同風景。
                        他可以在這邊留言、觀看文章來做為互動。

                        <li>東南亞店家愛好者</li>
                        他可以藉由看到不同店家的介紹，找到一些有趣且好吃的特色菜。
                        可以藉由留言板處可以相互交流一些特色菜色，可以自己發言特色店家，或是透過留言互動。
                    </ol>
                </p >
            </div >
            <Footer />
        </div >
    )
}


export default About