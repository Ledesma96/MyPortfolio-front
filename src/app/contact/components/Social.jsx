import Link from 'next/link'
import React from 'react'

const Social = () => {
  return (
    <div className='container-contact_div'>
        <div className='container-contact_div_div'>
            <section className='container-contact_div_div_section'>
                <div className='container-contact_div_div_section_div'>
                    <Link className='link' href='https://github.com/Ledesma96' target='blank'>
                        <img className='container-contact_div_div_section_div_img' src='/ejry4wslmps91.png'></img>
                        <p className='container-contact_div_div_section_div_p'>GitHub</p>
                    </Link>
                </div>
                <div className='container-contact_div_div_section_div'>
                    <Link className='link'  href='https://www.linkedin.com/in/gabriel-matias-ledesma/' target='blank'>
                        <img  className='container-contact_div_div_section_div_img' src='/linkedin_pixel_logo_icon_181925.png'></img>
                        <p className='container-contact_div_div_section_div_p'>Linkedin</p>
                    </Link>
                </div>
                <div className='container-contact_div_div_section_div'>
                    <Link className='link'  href='https://api.whatsapp.com/send?phone=5491164323570' target='blank'>
                        <img className='container-contact_div_div_section_div_img' src='/whatsapp_pixel_logo_icon_181923.png'></img>
                        <p className='container-contact_div_div_section_div_p'>+54 911 6432-3570</p>
                    </Link>
                </div>
                <div className='container-contact_div_div_section_div'>
                    <Link className='link' href='tel:+5491164323570'>
                        <img className='container-contact_div_div_section_div_img' src='/pngtree-pixel-art-call-center-icon-design-vector-png-image_8532647.png'></img>
                        <p className='container-contact_div_div_section_div_p'>+54 911 6432-3570</p>
                    </Link>
                </div>
                <div className='container-contact_div_div_section_div'>
                    <Link className='link'  href="mailto:gabriel.m.ledesma96@gmail.com">
                        <img className='container-contact_div_div_section_div_img' src='/mail-letter-pixel-free-vector.png'></img>
                        <p className='container-contact_div_div_section_div_p' >gabriel.m.ledesma96@gmail.com</p>
                    </Link>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Social