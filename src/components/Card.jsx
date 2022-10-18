import React from 'react'

function Card({name, email, id}) {
  return (
    <div className='bg-zinc-100 border-2 border-gray-200 rounded-lg p-2 m-2 
    hover:-translate-y-2 transition-transform ease-in-out
    shadow-xl text-center'>
        <img src={`https://robohash.org/${id}?200x200`} alt="" 
        className=''/>
        <div className='flex-col items-center justify-center text-zinc-700'>
            <h2 className='text-xl font-bold'>
                {name}
            </h2>
            <p>
                {email}
            </p>
        </div>
    </div>
  )
}

export default Card