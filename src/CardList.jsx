import React from 'react'
import Card from './Card'

function CardList({ robots }) {
    const cardsArray = robots.map((user, i) => {
        return (

        <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        )
    })
  return (
    <div className='flex-col mx-auto items-center justify-center'>
        {cardsArray}
    </div>
  )
}

export default CardList