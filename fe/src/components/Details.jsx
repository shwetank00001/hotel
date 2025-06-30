import React, {useEffect, useState, Suspense} from 'react'
import {ErrorBoundary, useErrorBoundary} from 'react-error-boundary'
const LazyHotel = React.lazy(() => import('./Hotels'));


export default function Details(){
    const [searchData, setSearchData ] = useState([])

    const [city, setCity] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const [showSearched, setShow] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setShow(true);
        alert(`You searched for the city :${city} and your checkin date is: ${checkIn} and checkout is: ${checkOut}`);
    }

    const { resetBoundary } = useErrorBoundary();
    function showError({error}){
        return (
            <div>
                <h1>Something went wrong!</h1>
                <p>The error is:- {error.message}</p>
                <button onClick={resetBoundary}>Try again</button>
            </div>
        )
    }

    // function resetAll(){
    //     setCity();
    //     setShow(false)
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter city name.' type='text' value={city} onChange={(e) => setCity(e.target.value)}  />
                <input placeholder='enter city name.' type='date' value={checkIn} onChange={(e) => setCheckIn(e.target.value)}  />
                <input placeholder='enter city name.' type='date' value={checkOut} onChange={(e) => setCheckOut(e.target.value)}  />
                <button type='submit'>Search</button>
                {/* <button onClick={resetAll}>Reset</button> */}
            </form>
            <ErrorBoundary fallbackRender={showError}>
                <Suspense fallback={<p>Loading hotel Data..</p>}>
                    <LazyHotel cityProp = {city} checkIn={checkIn} checkOut={checkOut} showSearched= {showSearched} />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}