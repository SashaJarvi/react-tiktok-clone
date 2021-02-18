import React from 'react';
import './FooterLeft.css';

import MusicNoteIcon from '../icons/MusicNote'

const VideoFooter = props => {
  const {channel, description, song} = props;

  return (
    <div className="footer-left">
      <div className="text">
        <h3>@{channel}</h3>

        <p>{description}</p>

        <div className="ticker">
          <MusicNoteIcon style={{ width: '30px' }} />

          <marquee behavior="left" scrollamount="2">{song}</marquee>
        </div>
      </div>
    </div>
  )
}

export default VideoFooter;
