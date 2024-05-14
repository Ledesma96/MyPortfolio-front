import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Page = () => {
    const [enter, setEnter] = useState(null)
    
    const handleMouseEnter = (index) => {
        setEnter(index)
    }

    const handleMouseLeave = () => {
        setEnter(false)
    }
  return (
    <main className={`container-options`}>
        <div className='contaier-options_div' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
            <img className={`${enter == 1? 'select-on' : 'select-off'}`} src='/arrows-up-and-down-pixelated-art-design-for-game-vector.png' alt='arrow'></img>
            <Link className='container-options_link' href='/developer'>DEVELOPER</Link>
        </div>
        <div className='contaier-options_div' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
            <img className={`${enter == 2? 'select-on' : 'select-off'}`} src='/arrows-up-and-down-pixelated-art-design-for-game-vector.png' alt='arrow'></img>
            <Link className='container-options_link' href='/portfolio'>PORTFOLIO</Link>
        </div>
        <div className='contaier-options_div' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
            <img className={`${enter == 3? 'select-on' : 'select-off'}`} src='/arrows-up-and-down-pixelated-art-design-for-game-vector.png' alt='arrow'></img>
            <Link className='container-options_link' href='/contact'>CONTACT</Link>
        </div>
    </main>
  )
}

export default Page;
