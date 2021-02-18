import React, {useState} from 'react';
import FavoriteIcon from "../icons/FavoriteIcon";
import FavoriteIconBordered from "../icons/FavoriteIconBordered";
import MessageIcon from "../icons/MessageIcon";
import ShareIcon from "../icons/ShareIcon";
import './FooterRight.css';

const VideoSidebar = props => {
  const {likes, shares, messages} = props;

  const [liked, setLiked] = useState(false);

  return (
    <div className="footer-right">
      <div className="sidebar-icon" onClick={() => setLiked(state => !state)}>
        { liked ? (
          <FavoriteIcon style={{ width: '40px', height: '40px' }} />
        ) : (
          <FavoriteIconBordered style={{ width: '40px', height: '40px' }} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="sidebar-icon">
        <MessageIcon style={{ width: '40px', height: '40px' }} />

        <p>{messages}</p>
      </div>

      <div className="sidebar-icon record-below">
        <ShareIcon style={{ width: '40px', height: '40px' }} />
        <p>{shares}</p>
      </div>

      <div className="sidebar-icon record">
        <img src="https://static.thenounproject.com/png/934821-200.png" alt="" />
      </div>
    </div>
  )
}

export default VideoSidebar;
