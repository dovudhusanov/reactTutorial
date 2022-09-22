import React, {useEffect, useState} from 'react';
import axios from "axios";

function Users(props) {

    const [data, setData] = useState([])
    const api = async () => {
        await axios.get("https://dovud-api.herokuapp.com")
            .then(res => {
                // setData(res.data)
                console.log(res)
            })
            .catch(error => {
                console.log("Error Back-End\'chila aybdor!", error)
            })
    }

    useEffect(() => {
        api()
    }, [])

    return (
        <>
            <h1 className='d'>Users</h1>
            {/*{*/}
            {/*    Object.keys(data).length === 0 ? (*/}
            {/*        <h1 className='text-center text-danger mt-5'>Back-End'chila Aybdor!</h1>*/}
            {/*    ) : (*/}
            {/*        <>*/}
            {/*            {*/}
            {/*                data.map((data, index) => (*/}
            {/*                    <div className='mainc' key={index}>*/}
            {/*                        <b></b>*/}
            {/*                        <h3 className="atitle">{data.firstName}</h3>*/}
            {/*                        <p className="atitle">{data.lastName}</p>*/}
            {/*                        <div>*/}
            {/*                            <button className="btn btn-success">Update</button>*/}
            {/*                            <button className="btn btn-danger mx-3">Delete</button>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </>*/}
            {/*    )*/}
            {/*}*/}
        </>
    );
}

export default Users;