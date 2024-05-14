'use client'
import Options from './Options.jsx'
import React, { useState } from 'react'

const Welcome = () => {
  const [options, setOptions] = useState(false)

  const handleClick = () => {
    setOptions(!options)
  }
  return (
    <div className='container-home'>
        <img className='image-home' src='/escena-pixeles-graficos-8-bits-ciudad-al-atardecer_23-2151120910.jpg' alt='imagen de fondo'/>
        <img className='gif-1' src='/245b4c950cc552ca58eeb355dc76a8df.gif' alt='gif fuego artificial'></img>
        <img className='gif-2' src='/245b4c950cc552ca58eeb355dc76a8df.gif' alt='gif fuego artificial'></img>
        <img className='gif-3' src='/245b4c950cc552ca58eeb355dc76a8df.gif' alt='gif fuego artificial'></img>
        <main className='container-home_div'>
          { options ? 
                      <Options options={options}></Options>
                      :
                      <>
                        <h1 className="font-pixel">WELCOME TO GABRIEL'S PORTFOLIO!</h1>
                        <button onClick={handleClick} className='start'>
                          <div className='pixel-1'></div>
                          <div className='pixel-2'></div> 
                          <div className='pixel-3'></div>
                          <div className='pixel-4'></div>
                          <div className='pixel-ligth-1'></div>
                          <div className='pixel-ligth-2'></div>
                          <div className='pixel-ligth-3'></div>
                          <p className='start_text'>Start</p>
                        </button>
                      </>
          }
          
        </main>
    </div>
  )
}

export default Welcome