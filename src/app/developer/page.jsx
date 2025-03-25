import React from 'react'
import Presentation from './components/Presentation.jsx'
import Skills from './components/Skills.jsx'
import Training from './components/Training.jsx'
import BtnBack from '../components/BtnBack.jsx'

const page = () => {
  return (
    <div className='container-developer'>
      <BtnBack></BtnBack>
        <Presentation></Presentation>
        <Training></Training>
        <Skills></Skills>
    </div>
  )
}

export default page