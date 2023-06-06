import React, { forwardRef } from 'react';
import video from '../../../src/source/video/video smoke with sub.mp4';
import './videoPlayer.css';

export const VideoPlayer = forwardRef((props, ref) => {
    // const videoId = 'https://youtu.be/mm5xVrMDqTE';
    return (
        <div className="video-wrapper" ref={ref}>
            <video className="video-player" controls>
                <source src={video} type="video/mp4" />
            </video>
            {/*<iframe*/}
            {/*    src={videoId}*/}
            {/*    title="YouTube video player"*/}
            {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*    allowFullScreen*/}
            {/*/>*/}
        </div>
    );
});

// import React, {forwardRef} from 'react';
// import './videoPlayer.css';
//
// export const VideoPlayer = forwardRef((props, ref) => {
//     const {videoSource, autoplay, controls, className} = props;
//
//     return (
//         <div className={`video-wrapper ${className}`} ref={ref}>
//             <div className="video-player">
//                 <iframe
//                     src={videoSource}
//                     title="YouTube video player"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     autoPlay={autoplay}
//                     controls={controls}
//                     style={{width: '50%', height: '70%'}}
//                 />
//             </div>
//         </div>
//     );
// });



