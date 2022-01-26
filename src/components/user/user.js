import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)


const User = () => {
    const {user, token} = useSelector(state => state.auth)
    const bookings = useSelector(state => state.bookings)
    const dispatch = useDispatch();
    const [bookingError, setBookingError] = useState('')

    useEffect(() => {
        const getBookings = async() => {
            try{
                const {data} = await axios({
                    url:'/api/guest/booking/',
                    method:'get',
                    headers: {
                        auth_token: token
                    }
                })
                
                dispatch({
                    type: 'GET_BOOKINGS',
                    payload: data
                })

            }catch(e){
            }
        }

        getBookings()

    }, [])

    const deleteBooking = async(bookingId, token) => {
        try{
            const {data} = await axios({
                url:`/api/guest/booking/${bookingId}`,
                method:'delete',
                headers: {
                    auth_token: token
                }
            })
            if(data.status === 'completed'){
                dispatch({
                    type: "DELETE_BOOKING",
                    payload: bookingId
                })

                setBookingError('')
            }else{
                setBookingError('Booking could not be cancelled at this time')
            }
        }catch(e){
            setBookingError('Booking could not be cancelled at this time')
        }
    }

    const serializeRoomTypes = (rooms) => {
        let roomTypes = []
        rooms.forEach(({roomType}) => {
            return !roomTypes.includes(roomType) && roomTypes.push(roomType)
        })

        return roomTypes;
    }

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
                    {
                        bookingError && 
                        <h6 className='text-red-700 text-center font-semibold text-sm'>{bookingError}</h6>
                    }
                    <h3 className='font-semibold text-center'>My Bookings</h3>
                    {   
                        bookings.length > 0 ? 
                        
                        bookings.map(booking => {
                            return (
                                <div key={booking._id} className='flex justify-between bg-gray-200 my-2 w-full max-w-lg p-1.5 sm:p-2 md:p-3 rounded-md mx-auto items-center'>
                                    <div className='flex flex-col gap-y-1 sm:gap-y-2'>
                                        <span className='font-semibold'>
                                            {`${
                                                serializeRoomTypes(booking.rooms).join(', ')
                                            } ${booking.rooms.length > 1 ? 'rooms' : 'room'}`}
                                        </span>
                                        <div className='flex flex-col md:flex-row gap-x-2.5'>
                                            <div className='flex gap-x-1'>
                                                <span className='font-semibold'>From:</span>
                                                <span>
                                                    {`${dayjs(booking.from).format("MMM DD, YYYY")}`}
                                                </span>
                                            </div>
                                            <div className='flex gap-x-1'>
                                                <span className='font-semibold'>To:</span>
                                                <span>{`${dayjs(booking.to).format("MMM DD, YYYY")}`}</span>
                                            </div>
                                        </div>
                                        <div className='flex gap-x-1'>
                                            <span className='font-semibold'>Amount:</span>
                                            <span>{Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Math.floor(booking.amount/100))}</span>
                                        </div>
                                        <span className='text-sm font-semibold text-gray-900'>Number of guests: {booking.guestNumber}</span>
                                    </div>
                                    <i 
                                        className="fas fa-trash-alt text-red-900 cursor-pointer" 
                                        onClick={() => deleteBooking(booking._id,token)}></i>
                                </div>
                            )
                        })
                        :
                        <div className='my-10 flex flex-col items-center gap-2'>
                            <p className='text-gray-500 font-semibold'>You have not made any bookings</p>
                            <Link to='/booking' className="bg-gray-900 hover:bg-black rounded-md py-3 px-4 font-bold text-sm text-white border border-gray-800 border-2">
								Book A Room
							</Link>
                        </div>
                    }                
                </div>
			</div>
		</>
	)
}



export default User