import Home from './homePage';
import {render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
 
test('loads and displays header', () => {
    render(
        <Router>
            <Home />
        </Router>
    )

    expect(screen.getByRole('heading',{name:/Starlit/i})).toBeInTheDocument()
})