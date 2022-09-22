import React, {useState} from 'react';
import "./Design.css"
import SearchVideos from "./SearchVideos";
import URL from "../../api/API"
import Video from "./Video";
import ListVideos from "./ListVideos";

function YcApp() {

    const [videos, setVideos] = useState([])
    const [selectedVideos, setSelectedVideos] = useState({id: {}, snippet: {}})

    async function videoSubmit(searchTerm) {
        const {data: {items: videos}} = await URL.get("search", {
            params: {
                part: "snippet",
                maxResults: 3,
                key: "AIzaSyD4W7kkQ53sBd0PX-ty-0AFPfuAVVSMF2g",
                q: searchTerm,
            }
        })

        console.log(videos)
        setVideos(videos)
        setSelectedVideos(videos[0])

    }

    return (
        <>
            <div className="searchSec" style={{marginTop: 100}}>
                <SearchVideos onSubmit={videoSubmit}/>
            </div>
            <div className='d-flex justify-content-around'>
                <div className='videoMain'>
                    <div className='videoSec'>
                        <Video video={selectedVideos}/>
                    </div>
                </div>
                <div className="videoLists">
                    <ListVideos videos={videos} onVideoSelect={setSelectedVideos}/>
                </div>
            </div>
        </>
    );
}

export default YcApp;