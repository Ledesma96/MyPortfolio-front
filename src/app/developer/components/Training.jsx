import React from 'react'

const titles = [{'diploma': '/634ca22508a44f000e379c20.png', 'title': 'Web development'},{'diploma': '/63eda20107f4fc000e085d5b.png', 'title': 'JavaScript'},{'diploma': '/641c9e4a50f60e00029cbec9.png', 'title': 'React js'},{'diploma': '/6554ccf30731ad154c11fe41.png', 'title': 'applications development'},{'diploma': '/657b4e889a83941af7db06d0.png', 'title': 'backend programming'}]

const Training = () => {
  return (
    <div className='container-developer_training'>
        <h3 className='container-developer_training_h3'>ACADEMIC TRAINING</h3>
        <div className='container-developer_training_card'>
            {titles.map((item, index) => (
                <div key={index} className='container-developer_training_card_div'>
                    <h4 className='container-developer_training_card_div_h4'>{item.title}</h4>
                    <img className='container-developer_training_card_div_img' src={item.diploma}></img>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Training