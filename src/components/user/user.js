import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const User = () => {
    const {user, token} = useSelector(state => state.auth)
    const bookings = useSelector(state => state.bookings)

    useEffect(() => {

        const getUserBookings =  async() => {
            try{
                const {data} = await axios({
                    url:'/api/guest/booking/',
                    method:'get',
                    headers: {
                        auth_token: token
                    }
                })

                console.log(data)
            }catch(e){
                console.log(e)
            }
        }

        getUserBookings()
    }, [])

    return (
		<>
            <nav className='w-full mx-auto px-3 sm:px-5 py-2 pt-10 border-b-2 border-gray-900'>
                <div className=' flex items-center justify-between'>
                    <span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
                    <Link to="/" className='px-1.5 sm:px-4 font-semibold sm:text-lg'>Home</Link>
                </div>
            </nav>
			<div className='md:animate-fadeIn flex flex-col py-10 min-h-screen sm:h-screen form-page'>
                <div className='shadow-xl bg-white rounded-md my-2 flex flex-row max-w-md w-11/12 mx-auto items-center gap-x-4 p-3'>
                    <div className='p-6 h-full bg-gray-200 text-gray-800 font-bold text-lg rounded-full'>
                    {`${user.firstName[0]}${user.lastName[0]}`}
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold'>{`${user.firstName} ${user.lastName}`}</h2>
                        <h5 className='text-sm text-gray-800'>{`${user.email ? user.email : ''}`}</h5>
                        <h5 className='text-sm text-gray-800'>{`${user.phoneNumber ? user.phoneNumber : ''}`}</h5>
                    </div>
                </div>
                <div 
                    className='bg-gray-50 flex-nowrap overflow-y-auto overflow-x-hidden scroll-mb-6 snap-start
                    shadow-xl my-2 max-w-screen-md w-11/12 mx-auto items-center gap-x-4 p-3 lg:p-10 rounded-md
                    flex flex-col
                    '>
                    <h3 className='font-semibold text-center'>My Bookings</h3>
                    {   
                        !bookings.length > 0 ? 
                        <p className='text-gray-500 font-semibold my-10'>You have not made any bookings</p>
                        :
                        <div className='flex justify-between bg-gray-200 my-2 w-full max-w-lg p-1.5 sm:p-2 md:p-3 rounded-md mx-auto items-center'>
                        <div className='flex flex-col gap-y-1 sm:gap-y-2'>
                            <span className=''>
                                Types of rooms
                            </span>
                            <div className='flex flex-col md:flex-row gap-x-1.5'>
                                <span>From</span>
                                <span>To</span>
                            </div>
                            <span className='font-semibold'>Amount</span>
                            <span className='text-xs font-semibold text-gray-900'>Number of guests: 2</span>
                        </div>
                        <i class="fas fa-trash-alt text-red-900 cursor-pointer"></i>
                        </div>
                    }                
                </div>
			</div>
		</>
	)
}



export default User