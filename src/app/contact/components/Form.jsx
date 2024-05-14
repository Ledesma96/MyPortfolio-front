'use client'
import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    const handleClick = async() => {
      const data = {
        name: name,
        email: email,
        message: message
    }
    try {
      const response = await axios.post('https://myportfolioback.onrender.com/api/v1/mailler/send-email', data)
      console.log(response);
      if(response.data.succes){
        setEmail('')
        setMessage('')
        setName('')
      }
      console.log('mensaje no enviado');
    } catch (error) {
      console.log(error);
    }
    }

    
  return (
        <form className='container-contact_form' onSubmit={handleSubmit}>
            <div className='container-contact_from_div'>
                <input type='text' className='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <label className={`${name != '' && 'label-name-up'} label-name`}>Name</label>
            </div>
            <div className='container-contact_from_div'>
                <input className='email' type='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <label className={`${email != '' && 'label-email-up'} label-email`}>Email</label>
            </div>
            <div className='container-contact_from_div'>
                <textarea className='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <label className='label-message'>Menssage</label>
            </div>
            <button className='btn' onClick={handleClick}>
                <div className='pixel-1'></div>
                <div className='pixel-2'></div> 
                <div className='pixel-3'></div>
                <div className='pixel-4'></div>
                <div className='pixel-ligth-1'></div>
                <div className='pixel-ligth-2'></div>
                <div className='pixel-ligth-3'></div>
                <p className='btn_text'>Submit</p>
            </button>
        </form>
  )
}

export default Form