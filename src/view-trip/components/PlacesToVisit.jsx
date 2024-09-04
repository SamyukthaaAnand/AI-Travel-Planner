import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-3'>Places to Visit</h2>

        <div>
            {trip?.tripData?.itinerary.map((item,index)=>(
                <div className='mt-5'> 
                    <h2 className='font-bold text-lg my-4'>Day {item.day}</h2>
                    <div className='grid md:grid-cols-2 gap-6'>

                    {item.places.map((places,index)=>(
                        <div className='my-4'>
                            <h2></h2>
                            <PlaceCardItem places={places}/>
                        </div>
                    ))}
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit