import React, {useEffect, useState} from 'react';
import axios from "axios";
//https://dovudxon-api.herokuapp.com/api/user/all hamma user
//https://dovudxon-api.herokuapp.com/api/user/create post user {name,email,password}
//https://dovudxon-api.herokuapp.com/api/user/:id patch => {name,email,password}
//https://dovudxon-api.herokuapp.com/api/user/:id => delete
function Api(props) {

    const [data, setData] = useState([])

    const apiReq = async () => {
        await axios.get("https://dovudxon-api.herokuapp.com")
            .then(res => {
                // setData(res)
                console.log(res.data)
            })
            .catch(error => console.error("Error", error))
    }

    useEffect(() => {
        apiReq()
    }, [])

    return (
        <div></div>
    );
}

export default Api;