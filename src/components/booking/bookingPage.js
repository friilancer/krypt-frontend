import React, {useState, useEffect, Fragment} from 'react';
import { useSelector } from 'react-redux'
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { PaystackButton } from 'react-paystack';
import axios from 'axios';
import { Link } from 'react-router-dom';
axios.defaults.withCredentials = true;
dayjs.extend(dayOfYear);

const PaywithPaystack = ({price, submitBooking}) => {	
	let user = useSelector((state) => state.auth.user);

	let config = {
		email: user.email,
		amount: price,
		metadata:user,
		publicKey: "pk_test_f6bfd988dcd72193ceddeb2ae4f6aaf500d269bc"
	}
	
	const onPaymentSuccess = (reference) => {
		let {trxref, transaction} = reference;
		submitBooking({trxref, transaction, price})
	}

	const onPaymentClose = () => {
		return ;
	}
	
	let componentProps = {
		...config,
		text: 'Pay via Paystack',
		onSuccess: (reference) => onPaymentSuccess(reference),
		onClose: onPaymentClose

	} 
	return (
		<div className="grid justify-items-center">
			<PaystackButton 
				className={
					`${price > 0 ? 'border-blue-900' : 'border-gray-500 '} 
					${price > 0 ? 'text-blue-900' : 'text-gray-600'} 
					${price > 0 && 'hover:bg-blue-900'} ${price > 0 && 'hover:text-white'} 
					my-5 md:my-0 md:mt-5 font-bold w-3/4 sm:w-1/2 md:w-full border md:border-0 md:border-t rounded-md md:rounded-none md:rounded-b-md py-1.5 px-2 grid place-self-center`}	
				{...componentProps}
			/> 
		</div>
	)
}

const SuccessPopup = ({setIsOpen}) => {
	return (
		<div className='w-screen h-screen fixed grid bg-black/90 place-items-center top-0 left-0'>
			<div className='w-11/12 max-w-sm mx-auto shadow-lg rounded-md gap-y-3 p-2 md:py-4 bg-white flex items-center flex-col'>
				<i class="fas fa-times text-red-900 self-end cursor-pointer" onClick={() => setIsOpen(false)}></i>
				<div className='flex flex-col items-center my-8'>
					<i class="fas fa-check-square text-green-500 text-2xl"></i>
					<span className='font-semibold'>Thanks for making a reservation with us</span>
				</div>
				<div className='flex gap-x-4 md:gap-x-6 mb-3'>
					<Link className='text-xs font-semibold sm:text-sm sm:font-normal cursor-pointer text-blue-500' to="/user">
						My Bookings
					</Link>
					<span 
						className='text-xs font-semibold sm:text-sm sm:font-normal cursor-pointer text-blue-500' 
						onClick={() => setIsOpen(false)}
					>
						Make another reservation
					</span>
				</div>
			</div>
		</div>
	)
}
const Booking = (displayNav) => {
	const [bookings, setBookings] = useState({
		doubleDeluxe : 0,
		deluxe: 0,
		single: 0
	})

	const {token} = useSelector(state => state.auth)

	const [guest, setGuest] = useState(1);
	const [maxGuest, setMaxGuest] = useState(2);

	const [dateRange, setDateRange] = useState({
		from: '',
		to: '',
		maxFrom: '',
		maxTo: ''
	})

	const [errorStatus, setErrorStatus] = useState({
		err: false,
		errorMessage: ''
	})

	const [price, setPrice] = useState(0);

	const [isOpen, setIsOpen] = useState(false)

	const [successStatus, setSuccessStatus] = useState({
		success: false,
		successMessage: ''
	})

	const selectDoubleDeluxe = (e) => {
		e.preventDefault();
		setBookings(prevbookings => {
			return	{
				...prevbookings,
				doubleDeluxe: prevbookings.doubleDeluxe === 2 ? 2 : prevbookings.doubleDeluxe + 1
			}
		})
	}

	const deselectDoubleDeluxe = (e) => {
		e.preventDefault();
		setBookings(prevbookings => {
			return	{
				...prevbookings,
				doubleDeluxe: prevbookings.doubleDeluxe === 0 ? 0 : prevbookings.doubleDeluxe - 1
			}
		})
	}

	const selectDeluxe = (e) => {
		e.preventDefault();
		setBookings(prevbookings => {
			return	{
				...prevbookings,
				deluxe: prevbookings.deluxe === 3 ? 3 : prevbookings.deluxe + 1
			}
		})
	}

	const deselectDeluxe = (e) => {
		e.preventDefault();
		setBookings(prevbookings => {
			return	{
				...prevbookings,
				deluxe: prevbookings.deluxe === 0 ? 0 : prevbookings.deluxe - 1
			}
		})
	}

	const selectSingle = (e) => {
		e.preventDefault();
		setBookings(prevbookings => {
			return	{
				...prevbookings,
				single: prevbookings.single === 2 ? 2 : prevbookings.single + 1
			}
		})
	}

	const deselectSingle = (e) => {
		e.preventDefault();
		setBookings(prevbookings => {
			return	{
				...prevbookings,
				single: prevbookings.single === 0 ? 0 : prevbookings.single - 1
			}
		})
	}

	const decrementGuests = (e) => {
		e.preventDefault()
		setGuest(prevGuest => prevGuest === 1 ? 1 : prevGuest - 1)
	}

	const incrementGuests = (e) => {
		e.preventDefault()
		setGuest(prevGuest => prevGuest >= maxGuest ? maxGuest : prevGuest + 1)		
	}

	const setCheckInDate = (e) => {
		setDateRange(prev => {
			return {
				...prev,
				from: e.target.value
			}
		})
	}

	const setCheckOutDate = (e) => {
		setDateRange(prev => {
			return {
				...prev,
				to: e.target.value
			}
		})
	}

	const resetError = () => setErrorStatus({
		err: false,
		errorMessage: ''
	})

	const resetSuccess = () => setSuccessStatus({
		success: false,
		successMessage: ''
	})

	const resetDateRanges = () => {
			
		let from = dayjs().format('YYYY-MM-DD');
		let to = dayjs().add(1, 'd').format('YYYY-MM-DD')
		let maxFrom = dayjs().add(3, 'M').format('YYYY-MM-DD')
		let maxTo = dayjs().add(1, 'd').add(3, 'M').format('YYYY-MM-DD')
		setDateRange({
			from,
			to,
			maxFrom,
			maxTo
		})
	}

	const resetBooking = () => {
		resetError()
		resetSuccess()
		setBookings({
			doubleDeluxe : 0,
			deluxe: 0,
			single: 0
		})
		resetDateRanges()
		setGuest(1)
	}

	const submitBooking = async({trxref, transaction, price}) => {
		let arr = Object.entries(bookings).filter(([_, value]) => value > 0);

		let bookedRooms = Object.fromEntries(arr);

		try{
			await axios({
				url:'https://kryptbackend.herokuapp.com/api/guest/booking/',
				method:'post',
				data:{
					rooms: bookedRooms,
					from:dateRange.from,
					to: dateRange.to,
					guestNumber: guest,
					reference:trxref,
					transaction,
					amount:price
				},
				headers: {
					auth_token: token
				}
			})

			setIsOpen(true)
			resetBooking()
		}catch(e){
			setErrorStatus({
				err: true,
				errorMessage: 'Payment could not be made for booking'
			})
		}

	}

	useEffect(() => {
		resetDateRanges()
	},[])

	useEffect(() => {
		const getBookedRooms = (bookings) => {
			let arr = Object.entries(bookings).filter(([key, value]) => value > 0);
			if(arr.length > 0) {
				let maxValue = arr.flat().filter(i => typeof i === 'number').reduce((prev, curr) => prev + curr) * 2;
				guest > maxValue && setGuest(maxValue)
				setMaxGuest(maxValue)
			}
			return Object.fromEntries(arr); 
			
		}
		const fetchPrice = async() => {
			let bookedRooms =  getBookedRooms(bookings);
			try{
				if(Object.keys(bookedRooms).length === 0){
					setMaxGuest(2)
					setGuest(1)
					return  setPrice(0);
				}
				const {data} = await axios({
								url:'https://kryptbackend.herokuapp.com/api/guest/booking/validation',
								method:'post',
								data:{
									rooms: bookedRooms,
									from:dateRange.from,
									to: dateRange.to,
									guestNumber: guest
								},
								headers: {
									auth_token: token
								}
				})
				guest > maxGuest && setGuest(maxGuest)
				resetError()
				setPrice(data.price)
			}catch(e){
				resetSuccess(0)
				setPrice(0)
				let errorMessage = e.response.data.errorMessage || "One of the selected rooms is unavailable"
				setErrorStatus({
					err: true,
					errorMessage
				})
			}
		}

		fetchPrice()
	},[bookings, dateRange.from, dateRange.to])
	
	return (
		<>	
			<div className='md:animate-fadeIn flex flex-col min-h-screen lg:min-h-0 sm:h-screen w-screen form-page'>
				<nav className={`${displayNav === false ? 'hidden' : ''} w-full mx-auto px-3 sm:px-5 py-2 pt-10 border-b-2 border-gray-900`}>
					<div className='flex items-center justify-between'>
						<span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
						<Link to="/" className='px-1.5 sm:px-4 font-semibold'>Home</Link>
					</div>
				</nav>
				<div className='my-2 md:my-0 flex flex-col md:flex-row 2xl:max-w-screen-xl 2xl:mx-auto p-2 h-full w-full justify-evenly items-center'>
					<div className='my-5 md: my-0 flex'>
						<p className='font-bold text-xl text-center md:text-3xl text-gray-900'>
							Get the best room deals right now!
						</p>
					</div>
					<div className="w-11/12 max-w-lg md:max-w-md mx-auto lg:mx-0 sm:border-b-2 bg-white border-gray-300 rounded-xl pt-8 border">
						<form className="mx-4 grid place-items-center ">
							{
								errorStatus.err && 
								<div className="flex w-full px-1 text-sm items-center justify-between bg-red-100 text-red-700 font-semibold">
									<h3>{errorStatus.errorMessage}</h3>
									<i onClick={resetError} className="fa fa-times cursor-pointer"></i>
								</div>
							}
							{
								successStatus.success && 
								<div className="flex w-full px-1 text-sm items-center justify-between bg-green-100 text-green-700 font-semibold">
									<h3>{successStatus.successMessage}</h3>
								</div>
							}
							<h4 className="place-self-start text-gray-800 font-medium">Room Type</h4>
							<div className="place-self-start w-full bg-blue-50 my-1 p-2 rounded-md grid grid-cols-2-auto">
								<div className="font-normal text-gray-600">Double Deluxe</div>
								<div className="flex">
									{
										typeof bookings.doubleDeluxe === 'number' && bookings.doubleDeluxe !== 0 &&
										<div className="flex">
											<button 
												aria-label="deselect-double-deluxe" 
												className="fa fa-minus border border-gray-800 text-gray-800 rounded-md p-1"
												onClick={deselectDoubleDeluxe}
											></button>
											<div className="mx-8 text-lg font-medium">{bookings.doubleDeluxe}</div>
										</div>
									}		
									<button 
										aria-label="select-double-deluxe" 
										className="fa fa-plus border border-gray-800 text-gray-800 p-1 rounded-md"
										onClick={selectDoubleDeluxe}
									></button>
								</div>
							</div>
							<div className="place-self-start w-full bg-blue-50 my-1 p-2 rounded-md grid grid-cols-2-auto">
								<div className="font-normal text-gray-600">Deluxe</div>
								<div className="flex">
									{
										typeof bookings.deluxe === 'number' && bookings.deluxe !== 0 &&
										<div className="flex">
											<button 
												aria-label="deselect-deluxe" 
												className="fa fa-minus border border-gray-800 text-gray-800 rounded-md p-1"
												onClick={deselectDeluxe}
											></button>
											<div className="mx-8 text-lg font-medium">{bookings.deluxe}</div>
										</div>
									}		
									<button 
										aria-label="select-deluxe" 
										className="fa fa-plus border border-gray-800 text-gray-800 rounded-md p-1"
										onClick={selectDeluxe}
									></button>
								</div>
							</div>
							<div className="place-self-start w-full bg-blue-50 my-1 p-2 rounded-md grid grid-cols-2-auto">
								<div className="font-normal text-gray-600">Single</div>
								<div className="flex">
									{
										typeof bookings.single === 'number' && bookings.single !== 0 &&
										<div className="flex">
											<button 
												aria-label="deselect-single" 
												className="fa fa-minus border border-gray-800 text-gray-800 rounded-md p-1"
												onClick={deselectSingle}
											></button>
											<div className="mx-8 text-lg font-medium">{bookings.single}</div>
										</div>
									}		
									<button 
										aria-label="select-single" 
										className="fa fa-plus border border-gray-800 text-gray-800 rounded-md p-1"
										onClick={selectSingle}
									></button>
								</div>
							</div>
							<div className= "place-self-start w-full sm:grid sm:gap-x-3 sm:grid-cols-2">
								<div className="my-1">
									<label className="text-gray-800 font-medium">Check-in Date</label>
									<input 
										className="bg-blue-50 rounded-md border my-1 w-full p-2" 
										type="date"
										id='checkIn'
										name='checkIn'
										onChange={setCheckInDate}
										defaultValue={dateRange.from}
										min={dateRange.from}
										max={dateRange.maxFrom}
									/>
								</div>
								<div className="my-1">
									<label className="text-gray-800 font-medium my-0.5">Check-out Date</label>
									<input 
										className="bg-blue-50 my-1 rounded-md border w-full p-2" 
										type="date"
										id='checkOut'
										name='checkOut'
										onChange={setCheckOutDate}
										defaultValue={dateRange.to}
										min={dateRange.to}
										max={dateRange.maxTo}
									/>
								</div>
							</div>
							<div className= "place-self-start w-full sm:grid sm:gap-x-3 sm:grid-cols-2">
								<div className="my-1">
									<div className="font-medium text-gray-800">No. of Guests</div>
									<div className="grid grid-cols-3 bg-blue-50 rounded-md p-2 items-center w-full">						
										<button 
											aria-label="increment-guests" 
											className="fa justify-self-start fa-minus border border-gray-800 rounded-md p-1 text-gray-800"
											onClick={decrementGuests}
										></button>
										<div className="mx-2 text-lg font-medium justify-self-center">{guest}</div>
										<button 
											aria-label="decrement-guests" 
											className="fa fa-plus p-1 border border-gray-800 rounded-md text-gray-800 justify-self-end"
											onClick={incrementGuests}
										></button>
									</div>
								</div>
							</div>
						</form>
						{
								price > 0 && 
								<div className="flex w-full px-1 font-bold text-gray-900 items-center justify-end font-bold">
									<h3 className="text-right px-3">{`Total Price: ${Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Math.floor(price/100))}`}</h3>
								</div>
							}
						<PaywithPaystack submitBooking={submitBooking} price={price}/>
					</div>
				</div>
				{
					isOpen && <SuccessPopup setIsOpen={setIsOpen} />
				}
			</div>
		</>
	)
};

export default Booking;