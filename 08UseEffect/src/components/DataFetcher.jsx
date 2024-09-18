import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function DataFetcher() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {

            setData(data);
            setLoading(false);
        });
    }, []);

    //it will run on only first render because array box is empty

  return (
    <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default DataFetcher