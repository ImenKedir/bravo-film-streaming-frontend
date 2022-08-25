import React from 'react'

const HeaderItem = ({title, Icon}) => {
  return (
    <div className='group w-10 lg:w-12 mx-4 md:mx-5 lg:mx-6 flex flex-col items-center cursor-pointer group text-bravo-dark hover:text-bravo-accent'>
        <Icon className="w-full h-full group-hover:animate-bounce"/>
        <p className='text-xs lg:text-base tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
    </div>
  )
}

export default HeaderItem