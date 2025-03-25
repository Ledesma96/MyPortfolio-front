import React from 'react'
import Form from './components/Form.jsx'
import Social from './components/Social.jsx'
import BtnBack from '../components/BtnBack.jsx'

const page = () => {
  return (
    <div className='container-contact'>
      <BtnBack></BtnBack>
        <main className='container-contact_main'> 
            <h1 className='container-contact_main_h1'>Contact</h1>
            <Form></Form>
        </main>
        <Social></Social>
    </div>  
  )
}

export default page