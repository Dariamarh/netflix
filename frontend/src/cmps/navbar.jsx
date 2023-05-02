
import Search from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from 'react'

const Navbar = () => {
    const  [isScrolled, setIsScrolled]  = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }


    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="left-navbar">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My list</span></div>
            <div className="right-navbar">
                <Search className="icon" />
                <span>KID</span>
                <NotificationsIcon className="icon" />
                <PersonIcon className="icon" />
                <div className="profile">
                    <ArrowDropDownIcon className="icon" />
                    <div className="options-navbar">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
