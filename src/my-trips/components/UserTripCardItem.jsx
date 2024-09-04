import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function UserTripCardItem({trip}) {

    const [PhotoUrl,setPhotoUrl]=useState();

    useEffect(()=>{
        trip&&GetPlacePhoto();
    },[trip])

    const GetPlacePhoto=async()=>{
        const data={
        textQuery:trip?.userSelection?.location?.label
        }
        const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[2].name);

        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        setPhotoUrl(PhotoUrl);
        })
  }

  return (
    <a href={'/view-trip/'+trip?.id} >
    <div className='hover:scale-105 transition-all'>
        <img src={PhotoUrl} 
        className='object-cover rounded-xl h-[200px] w-[300px]'/>
        <div>
            <h2 className='font-bold text-lg mt-3'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-400'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection.budget} Budget.</h2>
        </div>
    </div>
    </a>
  )
}

export default UserTripCardItem