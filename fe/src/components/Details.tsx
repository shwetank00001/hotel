import React, {useState} from 'react'

export default function Details(){

    const [city, setCity] = useState('');

    const [searchData, setSearchData ] = useState([])
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    function handleSubmit(e:any){
        e.preventDefault();
        setSearchData(function(item:any){
            return [...item,
                {
                    cityName: city,
                    checkInDate: checkIn,
                    checkOutDate:  checkOut
                }
            ]
        });
        console.log(searchData)
    }
    console.log(searchData)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter city name.' type='text' value={city} onChange={(e) => setCity(e.target.value)}  />
                <input placeholder='enter city name.' type='date' value={checkIn} onChange={(e) => setCheckIn(e.target.value)}  />
                <input placeholder='enter city name.' type='date' value={checkOut} onChange={(e) => setCheckOut(e.target.value)}  />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}