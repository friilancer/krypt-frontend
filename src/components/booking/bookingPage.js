import React, {useState, Fragment} from 'react';
import scene from '../../img/scene.png'

const Booking = () => {
	const [bookings, setBookings] = useState({
		doubleDeluxe : 0,
		deluxe: 0,
		single: 0
	})

	return (
		<>
			<div className="max-w-md sm:relative sm:top-2 sm:border-b-2 sm:border-gray-300 sm:rounded-xl sm:pb-10 mx-auto">
				<span className="relative top-5 font-bold mx-3 text-2xl font-serif text-blue-600">Starlit</span>
				<div>
					<img src={scene} className="max-h-48 w-full" alt="" />
				</div>
				<div className="relative bottom-2 h-5 rounded-full bg-white"></div>
				<form className="mx-3 grid place-items-center">
					<h1 className="text-lg place-self-start mb-4 text-blue-900 font-bold">
						I want to book...
					</h1>
					<h4 className="place-self-start text-blue-900 font-medium">Room Type</h4>
					<div className="place-self-start w-full bg-blue-50 my-1 p-2 rounded-md grid grid-cols-2-auto">
						<div className="font-normal">Double Deluxe</div>
						<div className="flex">
							{
								typeof bookings.doubleDeluxe === 'number' && bookings.doubleDeluxe !== 0 &&
								<div className="flex">
									<button aria-label="deselect-double-deluxe" className="fa fa-minus border border-blue-900 text-blue-900 rounded-md p-1"></button>
									<div className="mx-8 text-lg font-medium">{bookings.doubleDeluxe}</div>
								</div>
							}		
							<button aria-label="select-double-deluxe" className="fa fa-plus border border-blue-900 text-blue-900 p-1 rounded-md"></button>
						</div>
					</div>
					<div className="place-self-start w-full bg-blue-50 my-1 p-2 rounded-md grid grid-cols-2-auto">
						<div className="font-normal">Deluxe</div>
						<div className="flex">
							{
								typeof bookings.deluxe === 'number' && bookings.deluxe !== 0 &&
								<div className="flex">
									<button aria-label="deselect-deluxe" className="fa fa-minus border border-blue-900 text-blue-900 rounded-md p-1"></button>
									<div className="mx-8 text-lg font-medium">{bookings.deluxe}</div>
								</div>
							}		
							<button aria-label="select-deluxe" className="fa fa-plus border border-blue-900 text-blue-900 rounded-md p-1"></button>
						</div>
					</div>
					<div className="place-self-start w-full bg-blue-50 my-1 p-2 rounded-md grid grid-cols-2-auto">
						<div className="font-normal">Single</div>
						<div className="flex">
							{
								typeof bookings.single === 'number' && bookings.single !== 0 &&
								<div className="flex">
									<button aria-label="deselect-single" className="fa fa-minus border border-blue-900 text-blue-900 rounded-md p-1"></button>
									<div className="mx-8 text-lg font-medium">{bookings.single}</div>
								</div>
							}		
							<button aria-label="select-single" className="fa fa-plus border border-blue-900 text-blue-900 rounded-md p-1"></button>
						</div>
					</div>
					<div className= "place-self-start w-full sm:grid sm:gap-x-3 sm:grid-cols-2">
						<div className="my-1">
							<label className="text-blue-900 font-medium">Check-in Date</label>
							<input 
								className="bg-blue-50 rounded-md border my-1 w-full p-2" 
								type="date"
							/>
						</div>
						<div className="my-1">
							<label className="text-blue-900 font-medium my-0.5">Check-out Date</label>
							<input 
								className="bg-blue-50 my-1 rounded-md border w-full p-2" 
								type="date"
							/>
						</div>
					</div>
					<div className= "place-self-start w-full sm:grid sm:gap-x-3 sm:grid-cols-2">
						<div className="my-1">
							<div className="font-medium text-blue-900">No. of Guests</div>
							<div className="grid grid-cols-3 bg-blue-50 rounded-md p-2 items-center w-full">						
								<button aria-label="deselect-deluxe" className="fa justify-self-start fa-minus border border-blue-900 rounded-md p-1 text-blue-900"></button>
								<div className="mx-2 text-lg font-medium justify-self-center">1</div>
								<button aria-label="select-deluxe" className="fa fa-plus p-1 border border-blue-900 rounded-md text-blue-900 justify-self-end"></button>
							</div>
						</div>
					</div>
					<button className="mt-8 w-3/4 hover:bg-blue-900 hover:text-white sm:w-3/5 font-bold border border-blue-900 text-blue-900 rounded-md py-1.5 grid place-self-center">
						Book
					</button>
				</form>
			</div>
		</>
	)
};

export default Booking;