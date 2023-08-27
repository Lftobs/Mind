import React from 'react'
import { cards } from '../utils'


export const Card = () => {
  return (
    <div className='cards'>
        { cards?.map((card, index) => (
            <div className='card' key={index}>
                <img src={card.img} alt='context-img'  loading='lazy' />
                <div className='card-txt'>
                    <h4>{card.title}</h4>
                    <p>
                        {card.text} 
                    </p>
                </div>
            </div>
            ))
        }
    </div>
  )
}
