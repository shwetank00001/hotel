import { useState, useEffect } from 'react';
import Axios from 'axios'

import './hotel.css'
const Hotels = () => {
    
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
                <h3>The hotel name:- {item.name}</h3>
                <h5>Our Pricing:-{item.price}</h5>
            </div>
        )
    });

    let lowestPriceA = null;
    if(fetchedData[0] && fetchedData[0].length > 1){
        lowestPriceA = fetchedData[0].reduce(function(acc, current){
            if(current.price < acc){
                acc = current.price;
            }
            return acc;
        }, fetchedData[0][0].price);
        console.log("Lowest A" , lowestPriceA)
    }


    let lowestPriceB= null;
    if( fetchedData[1] && fetchedData[1].length > 1){
        lowestPriceB = fetchedData[1].reduce(function(acc, current){
            if(current.price < acc){
                acc = current.price;
            }
            return acc;
        }, fetchedData[1][0].price);
        console.log("Lowest B" , lowestPriceB)
    }



  return (
        <div className='hotelGrid'>
            <div>
                <h1>Supplier A hotels</h1>
                {suppAList}
                <p>Min is: {lowestPriceA}</p>
            </div>
            <div>
                <h1>Supplier B hotels</h1>
                {suppBList}
                <p>Min is: {lowestPriceB}</p>
            </div>
        </div>
  )
}

export default Hotels