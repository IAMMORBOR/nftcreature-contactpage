import { useState } from 'react';
import React from 'react';
// import '../Styles/Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';
import {CiLocationOn} from 'react-icons/ci';
import {TbWorld}from 'react-icons/tb';

const ContactPage =()=>{
    const [UserName, setUserName] = useState("");
    const[walletID, setWalletID]=useState("")
    const [message, setMessage] = useState("");
    const [email, setemail] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);

    const handleSubmit= ()=>{
        if (UserName === "" || walletID === "" || message === "" || email === ""){
            alert('fill in all section ')

        }else{
            // alert('message submitted')
             setSuccessMsg(true)
        }
       
    }
    const HandleSuccessMsg =()=>{
       console.log("hey")
       successMsg(true)
      }

    return(
     <section className="ContactSection">
        <div className="ContactSection--frame1">
            <div className="Heading">
              CONTACT US
            </div>
            <p className="contactSection--text">
              We’re available for any complains or just to have a chat.
            </p>
            <div className="ContactSection--contact">
                <div className="ContactSection--info">
                     <a className='ContactSection--link' href="tel:08164609847">
                            <div className="ContactSection--icon_container">
                                <FiPhoneCall className='ContactSection--icon' />
                            </div>
                            <p className="ContactSection--info">
                                +(234) 456 786 7896
                            </p>
                        </a>
                </div>
                <div className="ContactSection--info">
                    <a className='ContactSection--link' href="mailto:ofamotibe@gmail.com">
                        <div className="ContactSection--icon_container">
                            <AiOutlineMail className="ContactSection--icon" />
                        </div>
                        <p className="contact-section--mail__icon--text">
                            varena@gmail.com
                        </p>
                    </a>
                </div>
                
                <div className='ContactSection--info'>
                    <div className='ContactSection--link'>
                    <div className="ContactSection--icon_container">
                        <CiLocationOn className='ContactSection--icon'/>
                    </div>
                    <p className='ContactSection--info'>
                      23F, Georgia Town, Atlanta.
                    </p>
                    </div>
                </div>
                <div className="ContactSection--info">
                    <a className='ContactSection--link' href="www.varena.com">
                        <div className="ContactSection--icon_container">
                            <TbWorld className='ContactSection--icon' />
                        </div>
                        <p className="ContactSection--info">
                             www.varena.com
                        </p>
                    </a>
                </div> 
            </div>
        </div>
        <div className='ContactSection--frame2'>
             <form className="frame--form-section">
                <h4 className='frame2__Heading'>
                    Tell Us what you need
                </h4>
                <label htmlFor='UserName' className='frame2--label'> UserName </label> 
                <input className='frame2--input' id='UserName' 
                    type='text'
                     placeholder='enter your username'
                    required
                    onChange={(e)=>{setUserName(e.target.value);}}
                /> 

                <label htmlFor='Email' className='frame2--label'> Email Address</label>
                <input className='frame2--input' id='Email'
                 type='email' 
                 placeholder='enter your email address'
                 required
                 onChange={(e)=>{setemail(e.target.value);}}
                 />
                <label htmlFor='Wallet' className='frame2--label'> Wallet Address </label>
                <input className='frame2--input'
                 id='Wallet' type='text'
                  placeholder='enter your wallet address'
                  required
                  onChange={(e)=>{setWalletID(e.target.value);}}
                  />
                <label htmlFor='Message' className='frame2--label'>Message </label>
                <textarea className='frame2--input--msg'
                 id='Message'
                 type='text'
                 placeholder='Write a message'
                 onChange={(e)=>{setMessage(e.target.value);}}
                 />
                <p className='textArea--text'>250 words remaining</p>
                <button className='form--btn' onClick={handleSubmit}>Send</button>
            </form>
            
        </div>
        {successMsg ? <div className="successMessage">
        <h4 className="successMessage--text">
        Thank You!
        </h4>
        <p className="successMessage--subtext">Message delivered successfully.</p>
        <button className="successMessage--btn" onClick={HandleSuccessMsg}>ok</button>
      </div> : ""}
     </section>

    )
}
export default ContactPage;