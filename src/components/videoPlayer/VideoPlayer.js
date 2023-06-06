import React, { forwardRef } from 'react';
import video from '../../../src/source/video/video smoke with sub.mp4';
import './videoPlayer.css';

export const VideoPlayer = forwardRef((props, ref) => {
    return (
        <div className="video-wrapper" ref={ref}>
            <video className="video-player" controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
});
