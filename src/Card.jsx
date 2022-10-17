import React from 'react'

function Card({name, email, id}) {
  return (
    <div className='bg-zinc-300 border-2 border-gray-400 rounded-lg p-3 m-2 inline-block 
    hover:-translate-y-2 transition-transform ease-in-out
    shadow-xl text-center'>
        <img src={`https://robohash.org/${id}?200x200`} alt="" 
        className=''/>
        <div>
            <h2 className='text-2xl font-bold'>
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