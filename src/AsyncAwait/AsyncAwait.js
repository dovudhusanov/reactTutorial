import React from 'react';
import {logDOM} from "@testing-library/react";

function AsyncAwait(props) {

    function makeSayHello(hi) {
        return new Promise((resolve, reject) => {
            console.log(`Making say to ${hi}`)
            if(hi === 'hello') {
                resolve('success')
            }
            else {
                reject('error not found')
            }
        })
    }

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    async function doWork() {
        const response = await makeSayHello('hello')
        console.log(response)
    }

    doWork()

    async function fetchAsync() {
        let res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        let data = await res.json()
        console.log(data)
    }

    fetchAsync()

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default AsyncAwait;