import React from 'react';
import like from "./images/img_1.png";

function Video({video: {id: {videoId}, snippet: {title, channelTitle, description, thumbnails}}}) {

    if (!videoId) return <p className='noResult'>No Results</p>
    const videoSrc = `https://www.youtube.com/embed/${videoId}`

    return (
        <>
            <div className="videoIframe">
                <iframe
                    frameBorder="0"
                    allowFullScreen
                    title="Video player"
                    src={videoSrc}
                />
            </div>
            <div className='videoInfo'>
                <h1 className='titleVideo'>{title}</h1>
                <img src={like} alt=""/>
                <h3 className='channelTitle'>{channelTitle}</h3>
                <p className='descriptionVideo'>{description}</p>
            </div>
        </>
    );
}

export default Video;