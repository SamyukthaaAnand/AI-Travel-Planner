import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/service/firebaseConfig';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {

    const navigation=useNavigation();
    const [userTrips,setUserTrips]=useState([]);

    useEffect(()=>{
        GetUserTrips();
    },[])

    /**
     * 
     * @returns Used to get all user trips
     */
    const GetUserTrips=async()=>{
        const user=JSON.parse(localStorage.getItem('user'));
    
        if(!user)
        {
            navigation('/');
            return ;
        }
        
        const q = query(collection(db, "AiTrips"), where("userEmail", "==", user?.email));
        const querySnapshot = await getDocs(q);
        setUserTrips([]);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prevVal=>[...prevVal,doc.data()])
        });
            }

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 items-center'>
            <h2 className='font-bold text-3xl'>My Trips</h2>
            <div className='grid mt-10 grid-cols-4 gap-5'>
                {userTrips.length>0?userTrips.map((trip,index)=>(
                    <UserTripCardItem trip={trip} key={index}/>
                ))
            :[1,2,3,4,5,6].map((item,index)=>(
                <div key={index} className='h-[200px] w-[300px] bg-slate-200 animate-pulse rounded-xl'>

                </div>
            ))
            }
            </div>
        </div>
    )
}

export default MyTrips