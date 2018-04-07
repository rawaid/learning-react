import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; 
  // above, passing in video instead of props is the same as saying const video = props.video
  // es6 magic bb!
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <img className="media-object" src={imageUrl} />
      </div>

      <div className="media-body">
        <div className="media-heading">
          {video.snippet.title}
        </div>
      </div>
    </li>

  );
};

export default VideoListItem;