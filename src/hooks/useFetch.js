import { useState, useEffect } from "react"
import { get } from "axios"

const useFetch = (endpoint) => {

    const [data,setData] = useState(),
          [error,setError] = useState()

    useEffect(() => {
        get (`${process.env.REACT_APP_URL_API}${endpoint}`)
            .then(({ data }) => setData(data))
            .catch(e => setError(e))
    }, [endpoint])

    return [data, error]
}

export default useFetch