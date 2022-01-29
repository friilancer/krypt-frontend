import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <nav className='w-full mx-auto px-3 sm:px-5 py-2 pt-10 border-b-2 border-gray-900'>
            <div className=' flex items-center justify-between'>
                <span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
                <Link to="/" className='px-1.5 sm:px-4 font-semibold sm:text-lg'>Home</Link>
            </div>
        </nav>
    )
}

export default Nav