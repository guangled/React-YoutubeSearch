/*
* @Author: guangled
* @Date:   2017-03-08 20:39:42
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-13 16:52:25
*/

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
		);
};

export default VideoList;