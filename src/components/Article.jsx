import React from 'react'


function Article(props) {
  return (
   
    <div className='h-[15rem] w-[12rem]'>
        <img src={props.img} alt="image" className='rounded-t-lg'/>
        <div className='flex flex-col items-center bg-white h-[7rem] rounded-b-lg'>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>

    
  )
}

export default Article