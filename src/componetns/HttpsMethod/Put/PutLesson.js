import React, {useEffect, useState} from 'react';
import axios from "axios";

function PutLesson(props) {

    const [updatedAt, setUpdatedAt] = useState(null)

    useEffect(() => {
        axios.put('https://reqres.in/api/articles/1')
            .then(res => {
                setUpdatedAt(res.data.updatedAt)
                console.log(res)
            })
    }, [])

    return (
        <div>
            <div className='card'>
                <div className='card-header'>
                    Put Request
                </div>
                <div className='card-body'>
                    Returned update date: {updatedAt}
                </div>
            </div>
        </div>
    );
}

export default PutLesson;