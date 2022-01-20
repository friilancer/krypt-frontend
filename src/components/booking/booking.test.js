import Booking from './bookingPage'
import {render, screen} from '@testing-library/react';

test('loads and displays PayStack Button', () => {
    render(<Booking />)
    expect(screen.getByRole('button',{name:/Pay via Paystack/i})).toBeInTheDocument()
})
