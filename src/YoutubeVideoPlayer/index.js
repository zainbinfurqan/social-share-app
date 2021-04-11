import React, { Component } from 'react';
import CustomVideoPlayerControlPanel from './CustomControl'
import ReactPlayer from 'react-player'

class index extends Component {

    constructor() {
        super()
        this.state = {
            isPlay: false,
            currentSeek: 0,
            volumeBar: 0,
            volume: 0,
            totalDurationOfVideo: 0,
            muted: false
        }
        this.hostVideo = React.createRef()
    }

    handleVolumeChange = (e) => {
        this.setState({ volume: e.target.value / 100, volumeBar: e.target.value })
    }
    handleOnProgress = (e) => {
        this.setState({ currentSeek: e.playedSeconds })
    }

    handleSeekChange = (e) => {
        this.setState({ currentSeek: e.target.value })
        this.hostVideo.current.seekTo(e.target.value)
    }

    handlePlay = () => {
        if (this.state.totalDurationOfVideo === 0) {
            this.setState({ totalDurationOfVideo: this.hostVideo.current.getDuration() })
        }
        this.setState({ isPlay: true })
    }

    handlePause = () => {
        this.setState({ isPlay: false })
    }

    render() {
        const { muted, volume, currentSeek, isPlay, totalDurationOfVideo, volumeBar } = this.state
        return (
            <>
                <div className='player' style={{
                    width: "650px",
                    height: '400px'
                }}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=7xbsh-shzEQ'
                        width='650px'
                        height='400px'
                        volume={volume}
                        muted={muted}
                        ref={this.hostVideo}
                        playing={this.state.isPlay}
                        onProgress={(e) => this.handleOnProgress(e)}
                    >
                    </ReactPlayer>
                    <CustomVideoPlayerControlPanel
                        currentSeek={currentSeek}
                        playing={isPlay}
                        volume={volumeBar}
                        handlePause={this.handlePause}
                        handlePlay={this.handlePlay}
                        handleSeekChange={this.handleSeekChange}
                        totalDurationOfVideo={totalDurationOfVideo}
                        handleVolumeChange={this.handleVolumeChange} />
                </div>
            </>
        );
    }
}

export default index;


{/* <div className='player-main' style={{
                    width: "650px",
                    height: "400px",
                    position: "absolute",
                    backgroundColor: 'transparent',
                    border: "solid"
                }} />
                

{/* </div> */ }
