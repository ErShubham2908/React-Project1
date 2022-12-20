import './Header.css'
import Headimg from './logo.jpg'
const Header = () => {
    return(
    <>
        <div className="top-item">
            <div className="logo">
                <img src={Headimg} className="img1" alt="Not Found" />
                <span className="rubixe">Rubixe</span>
                <p className="inner-text">Disruptive Technologies at Work</p>
            </div>
            <div className="header-text">
                <span className="item item8">CONTACT US</span>
                <span className="item item7">ABOUT</span>
                <span className="item item6">BLOG</span>
                <span className="item item5">CAREER</span>
                <span className="item item4">AI INTERNSHIP</span>
                <span className="item item3">PRODUCTS</span>
                <span className="item item2">SERVICES</span>
                <span className="item item1">HOME</span>
            </div>
        </div>
    </>)
}

export default Header;