import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  // const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [fromName, setName] = useState("")
  const [fromsubject, setSubject] = useState("")
  const [fromMail, setMail] = useState("")
  const [fromMessage, setMessage] = useState("")

  // console.log(fromName)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const res = await fetch("/register",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },body: JSON.stringify({
        fromName,
        fromsubject,
        fromMail,
        fromMessage
      })
    });
    console.log(res);
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +92 334 7507000
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              talharasool700@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Lahore, Pakistan
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" onChange={(event)=>{setName(event.target.value)}} />

            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" onchange={(event)=>{setSubject(event.target.value)}} />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" onChange={(event)=>{setMail(event.target.value)}} />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" onChange={(event)=>{setMessage(event.target.value)}} />
            <button>Submit</button>
            {/* {done && "Thank you..."} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
