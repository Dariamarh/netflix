import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'


function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <KeyboardBackspaceIcon />
                Home
            </div>
            <video className='video'
                autoPlay={true}
                controls
                src='https://www.youtube.com/watch?v=Ta8zWJXw5n4' />
        </div>
    )
}

export default Watch