import React from 'react';
import SideVideos from "./SideVideos";

function ListVideos({videos, onVideoSelect}) {

    const videoList = videos.map((video, id) => (
        <SideVideos
            onVideoSelect={onVideoSelect}
            key={id}
            video={video}
        />
    ))

    return (
        <div>
            {videoList}
        </div>
    );
}

export default ListVideos;