import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function PlaceCardItem({places}) {

  const [PhotoUrl,setPhotoUrl]=useState();

  useEffect(()=>{
    places&&GetPlacePhoto();
  },[places])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:places.name
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }


  return (
    <a href={'https://www.google.com/maps/search/?api=1&query='+ places.name} target='_blank'>
    <div className='border rounded-xl p-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={PhotoUrl?PhotoUrl: '/placeholder.jpg'}
        className='w-[110px] h-[110px] rounded-xl object-cover'
        />
        <div>
            <h2 className='font-bold text-lg'>{places.name}</h2>
            <p className='text-sm text-gray-500 mt-2'>{places.details}</p>
            <h2 className='text-sm mt-3'>{places.travel_time}.</h2>
            {/* <Button className='size=sm'><IoLocationOutline className='size-5'/></Button> */}
        </div>
    </div>
    </a>
  )
}

export default PlaceCardItem