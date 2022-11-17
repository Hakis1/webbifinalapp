import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://v2.jokeapi.dev/joke/Any';

export default function Jokes() {
    const [data, setData] = useState(null)
    const [isLoadingJoke, setIsLoadingJoke] = useState(false)

    useEffect(() => {
        setIsLoadingJoke(true)
        axios.get(URL)
            .then((response) => {
                setData(response.data)
            }).catch(error => {
                console.log(error)
                alert("Retrieving the joke failed!")
            }).finally(() => {
                setIsLoadingJoke(false)
            })
    }, [])

    const generateJoke = () => {
        setIsLoadingJoke(true)
        axios.get(URL)
            .then((response) => {
                setData(response.data)
            }).catch(error => {
                console.log(error)
                alert("Retrieving the joke failed!")
            }).finally(() => {
                setIsLoadingJoke(false)
            })

    }

    if (isLoadingJoke) {
        return <p>Loading your joke...</p>
    }

    return (
        <>
            <div className="Jokes">
                <h2>Random Joke Generator</h2>
                <h4>Category : {data?.category}</h4>
                <h4>{data?.setup}</h4>
                <p>{data?.delivery}</p>
                <button className="button" onClick={generateJoke} >Another one?</button>
            </div>
        </>

    );
}
