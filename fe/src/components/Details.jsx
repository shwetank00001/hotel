import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './details.css'

export default function Details(){

    const [city, setCity] = useState('');

    const [searchData, setSearchData ] = useState([])
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const [fetchedData, setFetchedData] = useState([[], []]);


    const url = "http://localhost:5000/api/search-hotels";

    useEffect(()=> {
        async function showHotels(){
            const response = await Axios.get(url);
            console.log("response", response.data);
            setFetchedData(response.data)
        }

        showHotels();
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        setSearchData(function(item){
            return [...item,
                {
                    cityName: city,
                    checkInDate: checkIn,
                    checkOutDate:  checkOut
                }
            ]
        });
        console.log(searchData);
        console.log("Fetched Data is", fetchedData)

    }

    let suppAList = fetchedData[0]?.map((item) => {
        return (
            <div>
                <h3>{item.name}</h3>
                <h5>{item.price}</h5>
            </div>
        )
    })
    let suppBList = fetchedData[1]?.map((item) => {
        return (
            <div>
                <h3>{item.name}</h3>
                <h5>{item.price}</h5>
            </div>
        )
    })

    console.log(searchData)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter city name.' type='text' value={city} onChange={(e) => setCity(e.target.value)}  />
                <input placeholder='enter city name.' type='date' value={checkIn} onChange={(e) => setCheckIn(e.target.value)}  />
                <input placeholder='enter city name.' type='date' value={checkOut} onChange={(e) => setCheckOut(e.target.value)}  />
                <button type='submit'>Search</button>
            </form>
            <div className='hotelGrid'>
                <div>
                    <h1>Supplier A hotels</h1>
                    {suppAList}
                </div>
                <div>
                    <h1>Supplier B hotels</h1>
                    {suppBList}
                </div>
            </div>

        </div>
    )
}