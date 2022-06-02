import React, {useState} from 'react'
import {Button, Input, Label} from "reactstrap";
import "./Task.css"

function AddValueTask() {

    const [user, setUser] = useState()

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleClick = () => {
        console.log(user)
    }

    return(
        <>
            <div className="input-group">
                <Input
                    name="name"
                    placeholder="name"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="lastname"
                    placeholder="Last Name"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="email"
                    placeholder="email"
                    type="email"
                    onChange={handleChange}
                />

                <Button onClick={handleClick}
                    id='InputBtn'
                    color="primary"
                >
                    Submit
                </Button>
            </div>
        </>
    )
}

export default AddValueTask