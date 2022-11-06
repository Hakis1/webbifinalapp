import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://v2.jokeapi.dev/joke/Any';

export default function Jokes() {
    const [setup, setSetup] = useState('');
    const [delivery, setDelivery] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const generateJoke = () => {
        setIsLoading(true)
        axios.get(URL)
            .then((response) => {
                console.log(response)
                const joke = response.data
                setSetup(joke.setup)
                setDelivery(joke.delivery)
                setIsLoading(false)
            }).catch(error => {
                console.log(error)
                alert("Retrieving the joke failed!!")
            })
    }

    useEffect(() => {
        generateJoke();
    }, [])

    if (isLoading) {
        return <p>Loading your joke...</p>
    }

    return (
        <>
            <div className="app">
                <h1>Random Joke Generator</h1>
                <h4>{setup}</h4>
                <p>{delivery}</p>
                <button className="button" onClick={generateJoke} >Another one?</button>
            </div>
        </>
    );
}
