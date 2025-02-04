import { useEffect, useState } from "react";
import { apiClient } from "../services/api";

export default function useFetch(url) {
    const [data, setDate] = useState(null);

    useEffect(()=> {
        apiClient.get(url)
            .then(response => setDate(response.data))
    }, [url]);
    
    return data
}