/*
* @Author: guangled
* @Date:   2017-03-08 20:38:01
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-13 16:55:33
*/

import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// In ES6, the argument {video} equals to "const video = props.video";
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;