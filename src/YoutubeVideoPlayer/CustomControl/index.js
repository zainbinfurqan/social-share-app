import React from 'react';
import './style.css'

function CustomVideoPlayerControlPanel(props) {
    return (
        <div className='row d-flex m-0 custom-player-controller'>
            {/* play and apuse icon */}
            <div className='custom-player-controller-play-pause' >
                {props.playing && <p onClick={props.handlePause} className='m-0'><i className="fa fa-pause text-white" /></p>}
                {!props.playing && <p onClick={props.handlePlay} className='m-0'><i className="fa fa-play text-white" /></p>}
            </div>
            {/* play and apuse icon */}
            <div className='custom-player-controller-volumne row m-0 ' style={{
                alignItems: 'center'
            }}>
                {/* mute, low and high volume icon with volum range input */}
                <div style={{ alignSelf: 'center', margin: '0px 5px', width: '10%' }}>
                    {props.volume > 50 && <i className='fa fa-volume-up text-white' />}
                    {props.volume == 0 && <i className='fa fa-volume-mute text-white' />}
                    {props.volume <= 50 && props.volume > 0 && <i className='fa fa-volume-down text-white' />}
                </div>
                <input
                    className='volum-range'
                    style={{ width: "80%" }}
                    type="range"
                    min={0} max={100}
                    value={props.volume}
                    onInput={(e) => props.handleVolumeChange(e)} />
                {/* mute, low and high volume icon with volum range input */}
            </div>
            <div className='custom-player-controller-video-progress row m-0 justify-content-center align-self-center'>
                {/* seeking video icon with seek range input */}
                <input
                    className='seek-range'
                    style={{ width: "90%" }}
                    type="range"
                    min={0}
                    max={props.totalDurationOfVideo}
                    onInput={(e) => props.handleSeekChange(e)}
                    value={props.currentSeek} />
                {/* seeking video icon with seek range input */}
            </div>
        </div>
    );
}

CustomVideoPlayerControlPanel.defaultProps = {
    currentSeek: 0,
    volume: 0,
    playing: false,
    totalDurationOfVideo: 0,
}

export default CustomVideoPlayerControlPanel;