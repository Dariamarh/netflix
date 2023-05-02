import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function Featured() {
    return (
        <div className='featured'>
            <img
                src="https://media.vogue.co.uk/photos/6023b46a08e0df632c2512cb/16:9/w_1920,c_limit/EIP_104_Unit_00173R.jpg" />
            <div className="info">
                <img src="https://artworks.thetvdb.com/banners/v4/series/364439/clearlogo/611ce000c7eb2.png" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe ipsum, quis provident at laboriosam molestiae illo suscipit vel maiores tempora,
                    ducimus rem pariatur assumenda quas quod aut incidunt? Autem, quaerat.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured