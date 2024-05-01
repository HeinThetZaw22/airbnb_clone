import React from 'react'

const CategoryButton = ({data}) => {
    // console.log(data);
  return (
    <div className=' flex group flex-col border-2 border-transparent gap-y-2 py-5 px-3 transition  duration-300 hover:border-b-gray-400 hover:border-b-2 items-center justify-center'>
        <span>{data.icon}</span>
        <h1 className=' text-xs font-roboto text-nowrap tracking-wider group-hover:text-gray-950 transition duration-300 text-gray-500'>{data.title}</h1>
    </div>
  )
}

export default CategoryButton