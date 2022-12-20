import educationpic from './educ.jpg'
import './Header.css'
const Imgcomponent = () => {
    return(
        <>
            <div className="parent">
                <img className='img' src={educationpic} alt="not found" />
            </div>
            <div className="text">
                <div className="tech-item">TECH</div>
                <div className="for-item">FOR <span className="teens-item">TEENS</span></div>
                <div className="text-item carving-item">CARVING FUTURE</div>
                <div className="text-item technology-item">TECHNOLOGY PROFESSIONALS</div>
                <div className="text-item out-item">OUT OD YOUNG MIND</div>
            </div>
        </>

    )
}

export default Imgcomponent;