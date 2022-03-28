import {useEffect, useState} from "react";

export default function useAPI(url, opts) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url, opts)
            .then((res) => res.json())
            .then((res) => {
                setResponse(res.data);
                setLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setLoading(false);
            })
    }, [url, opts]);

    return [response, loading, hasError];
}