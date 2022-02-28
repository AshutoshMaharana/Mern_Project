import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (url) => {
    const [isLoading,setIsLoading] = useState(true);
    const [data,setData] = useState()
    const [errMessage,setErrMessage] = useState(null)

    const fetchData = useCallback(() => {
        const abort = new AbortController();
        fetch(url,{signal:abort.signal})
        .then((res) => {
            if(!res.ok){
                throw new Error('Could not Connect to server')
            }
            return res.json()

        })
        .then((data)=>{
            setData(data)
            setIsLoading(false)
            setErrMessage(null)

        })
        .catch((err) => {
            if(!err.name === 'Abort'){
                setErrMessage(err.message)
                setIsLoading(false)
            }
            return () => abort.abort()
        })


    },[url])

    useEffect(()=> {
        fetchData()
    },[fetchData])
  return (
    data,isLoading,errMessage
  )
}

export default useFetch