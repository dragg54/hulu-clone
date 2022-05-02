import React from 'react'

const HeaderItem = ( {Icon, title} ) => {
  return (
    <div className='group flex flex-col cursor-pointer items-center w-12 sm:w-20 hover:text-white hover:animate-bounce'>
      <Icon className='h-8 mb-1'/>
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  );
}

export default HeaderItem