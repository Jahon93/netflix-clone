import React, {useState} from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img 
                    src="https://capitolcommunicator.com/wp-content/uploads/2018/06/netflix-Logo-750x398.jpg"
                    alt="Netflix img" 
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
              <SearchIcon className='icon'/>
              <span>KID</span>
              <NotificationsIcon className='icon' />
              <img 
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="" 
              /> 
              <div className="profile">
              <KeyboardArrowDownIcon className='icon'/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar