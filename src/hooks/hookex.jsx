 import { useState,useEffect } from "react"
 import axios from "axios"

 export default function useHookEX(url){
    const [res, setRes] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        const getRes = async () => {
        try {
            const resp = await axios.get(url)
            setRes(resp.data)
        } catch (error) {
            setError(error)
            console.error('Erro ao buscar dados:', error)
        }finally {
            setLoading(false)
        }
        }

        getRes()
    }, [res])

    return { res, loading, error }
}