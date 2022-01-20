const useSelector = () => {
    return { 
        bookings:{},
        auth:{
            token:"",
            user:{}
        }
    }
}

module.exports = {
    ...jest.requireActual('react-redux'),
    useSelector
}