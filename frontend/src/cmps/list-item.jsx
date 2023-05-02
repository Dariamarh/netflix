import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import { useState } from 'react'

function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://www.youtube.com/watch?v=Ta8zWJXw5n4"
    return (
        <div className="list-item"
            style={{ left: isHovered && (index * 225 - 50 + index * 7.5) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src="https://th.bing.com/th/id/OIP.eJA6yxWX_cPZac3lpuo0XgHaE8?pid=ImgDet&rs=1" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="item-info">
                        <div className="list-icons">
                            <PlayArrowIcon className='list-icon'/>
                            <AddIcon className='list-icon'/>
                            <ThumbUpOutlinedIcon className='list-icon'/>
                        </div>
                        <div className="list-item-info">
                            <span>1 hour 40 mins</span>
                            <span className='list-limit'>16+</span>
                            <span>1999</span>
                        </div>
                        <div className="list-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias nesciunt quam, ea, illum tempora, iure aliquid suscipit vero sunt qui ratione.
                        </div>
                        <div className="list-action">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem