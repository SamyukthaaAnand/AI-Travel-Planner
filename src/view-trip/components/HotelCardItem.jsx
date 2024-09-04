import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function HotelCardItem({hotel_options}) {

    const [PhotoUrl,setPhotoUrl]=useState();

    useEffect(()=>{
        hotel_options&&GetPlacePhoto();
    },[hotel_options])

    const GetPlacePhoto=async()=>{
        const data={
        textQuery:hotel_options.name
        }
        const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[3].name);

        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[5].name);
        setPhotoUrl(PhotoUrl);
        })
    }
    
  return (
    <a href={'https://www.google.com/maps/search/?api=1&query='+ hotel_options?.name+","+ hotel_options?.address} target='_blank'>

                <div className='hover:scale-105 transition-all cursor-pointer'>

                    <img src={PhotoUrl?PhotoUrl: '/placeholder.jpg'} className='rounded-xl h-[180px] w-full object-cover'/>

                    <div className='my-3 flex flex-col gap-2'>
                      <h2 className='font-bold'>{hotel_options.name}</h2>
                      <h2 className='text-xs text-gray-500'>{hotel_options.address}</h2>
                      <h2 className='text-sm'>{hotel_options.price}</h2>
                    </div>

                </div>
                </a>
  )
}

export default HotelCardItem