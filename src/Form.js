import React from 'react'

const Form = () => {

    function submitform(){
        console.log("hyy")
        let z=document.getElementById('number').value;
        if(z){
        if(z.length!==10)
            alert("please input Number in 10 Digits")
         }
        }
  

  return (
    <>
    <div className='parent'>
        <div className="child1">
            <h1>GET IN TOUCH</h1>
         <p>Please complete the form and we will get back to you</p>
        </div>
        <div className="child2">
            <form >
     <label htmlFor="name">Name*</label><br/>
   <input type="text" placeholder='Enter Your Name' id='name'  required/><br/><br/>
   <label htmlFor="email">Email*</label><br/>
   <input type="email" placeholder='Enter Your Email' id='email' required  /><br/><br/>
   <label htmlFor="number">Mobile No*</label><br/>
   <input type="text" placeholder='Enter Your Number' id='number' required /><br/><br/>
          {/* <button onClick={submitform}> Register Now</button> */}

    <button onClick={submitform}>Submit</button>
   </form>
        </div>
    </div>
    </>
  )
}

export default Form;