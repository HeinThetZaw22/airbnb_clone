import React from 'react'
import CategoryButton from './CategoryButton';

const Categories = ({categories}) => {
    // console.log(categories);
  return (
    <div className=' container'>
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {categories.map(i => 
                <CategoryButton key={i.id} data={i} />
            )}
        </div>
    </div>
  )
}

export default Categories