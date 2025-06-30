import { useState, useEffect } from 'react';
import Axios from 'axios'

import './hotel.css'
const Hotels = (props) => {

    console.log(props)
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
                <h3>The hotel name:- {item.name}</h3>
                <h5>Our Pricing:-{item.price}</h5>
                <h5>Our Location:-{item.city}</h5>
                <hr />
            </div>
        )
    })

    let suppBList = fetchedData[1]?.map((item) => {
        return (
            <div>
                <h3>The hotel name:- {item.name}</h3>
                <h5>Our Pricing:-{item.price}</h5>
                <h5>Our Location:-{item.city}</h5>
                <hr/>
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


    //taking those which have a matching city;
    let scanCityA = fetchedData[0].filter(function(item){
        return item.city.toLowerCase().includes(props.cityProp.toLowerCase());
    }) 
    let scanCityB = fetchedData[1].filter(function(item){
        return item.city.toLowerCase().includes(props.cityProp.toLowerCase());
    }) 

    console.log("Scan city A", scanCityA);
    console.log("Scan city B", scanCityB);

    const onlyA = scanCityA.map(function(item){
        return (
            <div>
                <h3>The hotel name:- {item.name}</h3>
                <h5>Our Pricing:-{item.price}</h5>
                <h5>Our Location:-{item.city}</h5>
                <button>Book Now</button>
                <hr/>
            </div>
        )
    })
    const onlyB = scanCityB.map(function(item){
        return (
            <div>
                <h3>The hotel name:- {item.name}</h3>
                <h5>Our Pricing:-{item.price}</h5>
                <h5>Our Location:-{item.city}</h5>
                <button>Book Now</button>
                <hr/>
            </div>
        )
    })


    let bestDeal = null;
    let bestSupplier = '';
    let bestHotel = null;

    if (scanCityA.length > 0 && scanCityB.length > 0) {
        const lowestA = scanCityA.reduce((acc, curr) => curr.price < acc ? curr.price : acc, scanCityA[0].price);
        const lowestB = scanCityB.reduce((acc, curr) => curr.price < acc ? curr.price : acc, scanCityB[0].price);

        if (lowestA < lowestB) {
            bestDeal = lowestA;
            bestSupplier = 'Supplier A';
            bestHotel = scanCityA.find(hotel => hotel.price === lowestA);
        } else {
            bestDeal = lowestB;
            bestSupplier = 'Supplier B';
            bestHotel = scanCityB.find(hotel => hotel.price === lowestB);
        }
    }



  return (
    <div>
        { props.showSearched ?
        <div className='hotelGrid'>
            <div>
                <h2>Supplier A Hotels: {props.cityProp}</h2>
                {onlyA}</div>
            <div>
                <h2>Supplier B Hotels: {props.cityProp}</h2>
                {onlyB}
            </div>
        </div> 
            :
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

        </div>}
        <div>
            {props.showSearched && bestDeal && bestHotel && (
                <div className="bestDealCard" style={{ border: '1px solid green', padding: '1rem', marginTop: '1rem' }}>
                    <h2>🔥 Best Deal</h2>
                    <p><strong>Supplier:</strong> {bestSupplier}</p>
                    <p><strong>Hotel:</strong> {bestHotel.name}</p>
                    <p><strong>City:</strong> {bestHotel.city}</p>
                    <p><strong>Price:</strong> ₹{bestDeal}</p>
                    <button>Book Now</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default Hotels