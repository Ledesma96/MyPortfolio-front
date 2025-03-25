import Link from 'next/link'
import React from 'react'

const BtnBack = () => {
  return (
    <div className='btn-return'>
        <Link href='/' className='btn-return_link'>
            <div className='pixel-1'></div>
            <div className='pixel-2'></div> 
            <div className='pixel-3'></div>
            <div className='pixel-4'></div>
            <div className='pixel-ligth-1'></div>
            <div className='pixel-ligth-2'></div>
            <div className='pixel-ligth-3'></div>
            <p className='btn-return_link_text'>Back</p>
        </Link>
    </div>
  )
}

export default BtnBack