import React from 'react'

function SearchBox({ searchField, searchChange }) {
  return (
    <div className='items-center p-2'>
        <input type="search"
        onChange={searchChange}
        placeholder='search robots'
        className='rounded-md px-4 py-2 placeholder-gray-500 focus:outline-none bg-gray-100'/>
    </div>
  )
}

export default SearchBox