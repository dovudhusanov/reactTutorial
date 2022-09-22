import React from 'react';

function SideVideos({video, onVideoSelect}) {
    return (
        <div>
            <div className='videoItems my-1' style={{maxWidth: 300, marginRight: 100}} onClick={() => onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt="overlay" style={{marginRight: 20}}/>
                <div className='titleVideo overflow-hidden'><b>{video.snippet.title}</b></div>
            </div>
        </div>
    );
}

export default SideVideos;