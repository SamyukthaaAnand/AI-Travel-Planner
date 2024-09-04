import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { RiShare2Line } from "react-icons/ri";
import { useEffect } from 'react';
import { GetPlaceDetails } from '../../service/GlobalApi';

const PHOTO_REF_URL= 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
function InfoSection({trip}) {

  const [PhotoUrl,setPhotoUrl]=useState();

  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location?.label
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[4].name);
      setPhotoUrl(PhotoUrl);
    })
  }

  return (
    <div>
      <img src={PhotoUrl} className='h-[340px] w-full object-cover rounded-xl' /> 

      <div className='flex justify-between items-center'>
          <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
            <div className='flex gap-5'>
              <h2 className='p-1 px-3 bg-gray-100 rounded-full text-gray-500 text-xs md:text-md'>{trip.userSelection?.noOfDays} Days</h2>
              <h2 className='p-1 px-3 bg-gray-100 rounded-full text-gray-500 text-xs md:text-md'>{trip.userSelection?.budget} Budget</h2>
              <h2 className='p-1 px-3 bg-gray-100 rounded-full text-gray-500 text-xs md:text-md'>No. of Travellers: {trip.userSelection?.traveller}</h2>

            </div>
          </div>
          <Button><RiShare2Line className='size-5'/></Button>
      </div>
      
    </div>
  )
}

export default InfoSection