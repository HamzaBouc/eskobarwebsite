import React from 'react'


function Contact() {
  return (
    <div id='contact'>
        <br /><h1>CONTACT US</h1>
        <div id='contact-form'>
        <form>
            <input type="text" placeholder='Full Name' required />
            <input type="email" placeholder='Type your E-mail' required />
            <textarea placeholder='Write Here .......' name='message'></textarea>
            <input type="Submit" value='Join our Cartel' />
        </form>
        </div> 
    </div>
  )
}

export default Contact;