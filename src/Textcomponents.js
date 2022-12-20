import './Header.css'
import indus from './indus.jpg'
const Textcomponents = () => {
  return (
    <>
      <div className="head">
        <div className="content">WHO WE ARE</div>
        <div className="pare">
            <p className="par-text">
            <br/>
            RubixeTM is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Machine Learning, Robotic
            Process Automation (RPA), BlockChain, and Internet of Things (IoT).
            <br/> <br/> 
            RubixeTM mission is to enable businesses to leverage the full
            potential of disruptive technologies and stay competitive in the
            market, turning complex challenges into solutions, providing a
            strategic competitive advantage that are more efficient, effective and
            predictable.
            </p>
            <img src={indus} alt="not found" />
        </div>
      </div>
    </>
  );
};

export default Textcomponents;