import React from 'react'
import Link from 'next/link'
import BtnBack from '../components/BtnBack'

const works = [
  { id: 4, name: "Bera Positivo", category: "e-commerce", image: "/Reg Hindley.png", url: "https://www.beramassillones.com", urlGit:'https://github.com/Ledesma96/beramas' },
  { id: 3, name: "El Cantinero", category: "e-commerce", image: "/cantineromook.png", url: "https://www.cantinero.netlify.app/", urlGit:'https://github.com/Ledesma96/elcantinero' },
  { id: 2, name: "Cook4Soul", category: "e-commerce", image: "/c4sMock.png",  url: "https://www.cook4souls.com", urlGit:'https://github.com/TeamDevCoder/Cook4Soul' },
  { id: 1, name: "ItanFlor", category: "servicios", image: "/Reg Hindley1.png", url: "https://www.itanflor.com", urlGit:'https://github.com/Ledesma96/ItanFlor' },{id: 5, name: "GabLoad", category: "services", image: "/gabload.png", url: "https://www.gabload.com", urlGit: 'https://github.com/Ledesma96/GabLoad'}
]

const page = () => {
  return (
    <div className='container-porfolio'>
      <BtnBack></BtnBack>
      <h1 className='title'>PORTFOLIO</h1>
      <div className='container-card'>
        {works.map((item) => (
          <div className='card'>
            <div className='pixel-1'></div>
            <div className='pixel-2'></div>
            <div className='pixel-3'></div>
            <div className='pixel-4'></div>
            <img className='card_img' src={item.image} alt={item.name} />
            <h2 className='card_h2'>{item.name}</h2>
            <div className='card_div'>
              <Link href={`${item.url}`} target='blank'>
                <img className='card_div_img' src='ilustracion-arte-pixeles-icono-web-icono-sitio-web-pixelado-icono-sitio-web-globo-pixelado-juego_1038602-754.png'/>
                <p className='card_div_p'>Web</p>
              </Link>
              <Link href={`${item.urlGit}`} target='blank'>
                <img className='card_div_img'  src='ejry4wslmps91.png'/>
                <p className='card_div_p'>GitHub</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page