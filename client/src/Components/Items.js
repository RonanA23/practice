import React from 'react'

function Items({item}) {
    const deleteHandler=()=>{
        console.log('deleted')
    }
  return (
    <div className=
    'bg-gray-500 text-white flex justify-between items-center p-4 w-[300px] m-2 mx-auto rounded-lg font-bold py-4'>
        <p>{item.title}</p>
        <b className='hover:text-red-400 cursor-pointer' onClick={deleteHandler}>X</b>
    </div>
  )
}

export default Items