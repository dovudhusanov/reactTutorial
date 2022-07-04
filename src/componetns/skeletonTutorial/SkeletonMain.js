import React, {useEffect, useState} from 'react';
import Joke from "./Joke";
import './JokeStyle.css'
import axios from "axios";

function SkeletonMain(props) {

    const [joke, setJoke] = useState({})
    const [loading, setLoading] = useState(false)

    const getNewJoke = () => {
      setLoading(true)
      axios.get('https://api.chucknorris.io/jokes/random')
          .then(data => {
              console.log(data.data)
          })
    }

    useEffect(() => {
        if (!joke) return loading
    }, [])

    return (
        <div>
            <button onClick={getNewJoke} className='btn btn-success'>Click</button>
        </div>
    );
}

export default SkeletonMain;