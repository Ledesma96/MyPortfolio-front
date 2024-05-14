import React from 'react'
import Walkways from './Walkways'


const front = ['HTML5_logo_and_wordmark.svg.png', 'CSS3_logo_and_wordmark.svg.png', 'Bootstrap_logo.svg.png', '1631110818-logo-react-js.png', 'next.svg']

const back = ['nodejs-1-logo.png', '1646733543.webp', '1024px-Socket-io.svg.png', 'NestJS.svg.png', 'desktop_bb0d21bf-2876-45ab-9a69-b61855001587.png']

const Skills = () => {
    
  return (
    <section className='container-developer_section'>
        <h3 className='container-developer_section_h3'>SKILLS</h3>
        <div className='container-developer_section_div'>
            <div className='container-developer_section_div_div front'>
                <h4 className='container-developer_section_div_div_h4'>Front-end</h4>
                <Walkways data={front}></Walkways>
            </div>
            <div className='container-developer_section_div_div back'>
                <h4 className='container-developer_section_div_div_h4'>Back-end</h4>
                <Walkways data={back}></Walkways>
            </div>
        </div>
    </section>
  )
}

export default Skills