/*
* @Author: guangled
* @Date:   2017-03-08 20:36:48
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-13 16:37:51
*/

import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`
	// EQUARES TO const url = 'https://www.youtube.com/embed/' + videoId;


	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetail;