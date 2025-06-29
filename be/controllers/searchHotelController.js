

async function searchHotels(req,res){
    try {
        const supplierAurl = "http://localhost:5000/supplierA/hotels";
        const supplierBurl = "http://localhost:5000/supplierB/hotels";

        const promise1 = async() =>{
            const data = await fetch(supplierAurl);
            const resp = await data.json();
            return resp
        }
        const promise2 = async() => {
            const data = await fetch(supplierBurl);
            const resp = await data.json();
            return resp
        }

        const allData = await Promise.all([promise1(), promise2()]);
        console.log(allData);
        res.status(200).send(allData)
        
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}


module.exports = {
    searchHotels
}