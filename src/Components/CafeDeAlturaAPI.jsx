import axios from "axios"
import { useEffect, useState } from "react"

const apiURL = 'https://cafe-de-altura-api.vercel.app/api/products'

const CafeDeAlturaAPI = () => {

    const [coffees, setCoffees] = useState([])
    const[fetching, setFetching] = useState(true)

    useEffect(() => {
        axios
            .get(apiURL)
            .then((response) => {
                setCoffees(response.data.products)
                setFetching(false)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h3>CAFESITOS</h3>

            {fetching && <h1>LOADING..........</h1>}

            {coffees.map((coffee) => {
                return (
                    <div key={coffee._id}>
                        <h3>{coffee.brand}</h3>
                        <img src={coffee.img_url} alt={coffee.brand} />
                    </div>
                )
            })}
        </div>
    )
}

export default CafeDeAlturaAPI