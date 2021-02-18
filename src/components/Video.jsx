import React, {useRef} from 'react';
import Footer from './FooterLeft';
import FooterRight from './FooterRight';
import './Video.css';

const Video = props => {
  const { url, channel, description, song, likes, shares, messages } = props;
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div className="video">
      <video
        className="player"
        src={url}
        ref={videoRef}
        onClick={onVideoPress}
        muted
        loop
      />

      <div className="bottom-controls">
        <Footer channel={channel} description={description} song={song} />

        <FooterRight likes={likes} shares={shares} messages={messages} />
      </div>
    </div>
  )
};

export default Video;
