import React, { useState, useEffect } from 'react';

export default function useFetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDays(data);
            })
    }, [url]);

    return data;
}