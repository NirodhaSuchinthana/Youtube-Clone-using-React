import React from 'react'
import "../css/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import youtubeLogo from "../assests/Logo_YouTube.svg"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img className="header_logo"
            src={youtubeLogo} alt=""  
        />
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header_inputButton"/>
      </div>
    
      <div className="header_icons">
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>
        <Avatar 
            alt="Remy Sharp"
            src={youtubeLogo}
        />
      </div>
    </div>
  )
}

export default Header
