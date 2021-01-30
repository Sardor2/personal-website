import React from 'react';
import video from '../../img/codeV.mp4';
import './bg-video.scss';

export default function BgVideo() {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}
