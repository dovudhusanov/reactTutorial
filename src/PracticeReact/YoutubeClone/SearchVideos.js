import React, {useState} from 'react';
import logo from "./images/logo1.png"
import functions from "./images/functions.png"
import profile from "./images/photo-1511367461989-f85a21fda167.jfif"

function SearchVideos({onSubmit}) {

    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = (e) => setSearchTerm(e.target.value)

    const keyPass = (e) => {
        if (e.key === "Enter") {
            onSubmit(searchTerm)
        }
    }

    return (
        <>
            <div className="header">
                <a href="/" className='brand'>
                    <img src={logo} className='logoBrand' alt="logo"/>
                </a>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={keyPass}
                />
                <div className='icons'>
                    <img src={functions} alt="functions" className='functions'/>
                    <a href="/" className='profile'>
                        <img src={profile} alt=""/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default SearchVideos;