import React from 'react'
import Card from './Card'

function CardList({ robots }) {
    const cardsArray = robots.map((user, i) => {
        return (
        <Card 
        key={i} 
        id={robots[i].id}
        name={robots[i].name} 
        email={robots[i].email} />
        )
    })
  return (
    <div className='flex-col gap-4 items-center justify-center'>
        {cardsArray}
    </div>
  )
}

export default CardList