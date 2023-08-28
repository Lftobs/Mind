import React, { useState } from 'react'

export const Join = () => {
  const [email,setEmail] = useState('')

  let theWaitlist = {
      email:email
  }

  let submitEmail = (e) =>{
    e.preventDefault()
    
    if (email.trim() !== '') {
      fetch('http://localhost:8080/Emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(theWaitlist)
      })
        .then(() => {
          console.log('Successfully submitted');
        })
        .catch((error) => {
          console.error('Error submitting:', error);
        });
    }
  }

  return (
    <form onSubmit={submitEmail}>
        <input type='email'  pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}' placeholder='Enter your email address' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button>Join the Waitlist</button>
    </form>

  )
}
