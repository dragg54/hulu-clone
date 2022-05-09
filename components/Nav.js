import React from 'react'
import requests from '../utils/request'
import { useRouter } from 'next/router'

function Nav(){
  const router = useRouter()
  return (
    <nav>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll last:pr-24 scrollbar-hide'>
        {Object.entries(requests).map(([key, {title,url}],index)=>(
            <h2 key={key} onClick={()=>router.push(`/genre?${key}`)} className='transition cursor-pointer duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
        ))}
      </div>
    </nav>
  )
}

export default Nav