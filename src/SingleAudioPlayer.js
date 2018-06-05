import React, { Component } from 'react';
import Controls from './components/Controls';
import CurrentTrack from './components/CurrentTrack';
import PropTypes from 'prop-types';
import './assets/style.css';

class SingleAudioPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            audioElement: {},
            currentPlayTime: 0,
            totalDuration: 0,
            endReached: false,
        }
    }

    setAudioElement = (e) => {
        this.setState({ audioElement: e }, () => {
            if (this.props.autoPlay) {
                this.playAudio();
            }
        });
    }

    setTotalDuration = (e) => {
        if(this.props.onTotalDurationChange && typeof this.props.onTotalDurationChange === 'function'){
            this.props.onTotalDurationChange(e.target.duration);
        }
        this.setState({ totalDuration: e.target.duration });
    }

    setEnded = (e) => {
        if(e.target.ended){
            this.setState({endReached: e.target.ended, playing: false});
        }
    }

    setPlaying = () => {
        this.setState({playing: true, endReached: false});
    }

    setCurrentPlayTime = (e) => {
        if(this.props.onCurrentTimeChange && typeof this.props.onCurrentTimeChange === 'function'){
            this.props.onCurrentTimeChange(e.target.currentTime);
        }
        this.setState({ currentPlayTime: e.target.currentTime });
    }

    playAudio = () => {
        this._playAudioFrom(0);
    }

    _playAudioFrom = (t) => {
        let currentState = {...this.state};
        currentState.audioElement.currentTime = t;
        currentState.currentPlayTime = t;
        this.setState(currentState, () => {
            if (this.state.audioElement.load) {
                if (t === 0){
                    this.state.audioElement.load();
                }
                this.state.audioElement.play();
            }
        });
    }

    handleClick = () => {
        console.error("Navigating between tracks is not yet supported.");
    }

    resumeAudio = () => {
        this._playAudioFrom(this.state.currentPlayTime);
    }

    pauseAudio = () => {
        this.setState({ playing: false });
        this.state.audioElement.pause();
    }

    render() {
        return (
            <div className='darn-simple-audio-container' >
                <div
                    className="album-art"
                    style={{ backgroundImage: "url(" + this.props.albumArt + ")", width: this.props.width, height: this.props.height }}
                >
                    {this.props.showControls ? <Controls onClick={this.handleClick}
                        resumeAudio={this.resumeAudio}
                        pause={this.pauseAudio}
                        play={this.playAudio}
                        {...this.state}
                        {...this.props}/> : ''}
                    {this.props.showTrackTitle ? <span>{this.props.trackTile}</span> : ''}
                    <CurrentTrack 
                        setCurrentPlayTime={this.setCurrentPlayTime}
                        setTotalDuration={this.setTotalDuration}
                        play={this.playAudio} ended={this.setEnded}
                        setAudioElement={this.setAudioElement}
                        setEnded={this.setEnded}
                        setPlaying={this.setPlaying}
                        {...this.props}
                    />
                </div>
                {/* <p>{this.state.currentPlayTime - this.state.totalDuration}</p> */}
          </div>)
                

    }
}

SingleAudioPlayer.defaultProps = {
    showControls: true,
    showPrev: false,
    showNext: false,
    showTrackTitle: false,
    autoPlay: true,
    showReplay: true,
    showPause: true,
    width: 280,
    height: 280,
    source: "",
    showAlbumTitle: true,
    albumArt: "",
}

SingleAudioPlayer.propTypes = {
    showControls: PropTypes.bool,
    showPrev: PropTypes.bool,
    showNext: PropTypes.bool,
    autoPlay: PropTypes.bool,
    showPause: PropTypes.bool,
    showReplay: PropTypes.bool,
    showAlbumTitle: PropTypes.bool,
    trackTile: PropTypes.string,
    source: PropTypes.string,
    albumArt: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onCurrentTimeChange: PropTypes.func,
    onTotalDurationChange: PropTypes.func,
    prevIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
    nextIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
    playIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
    pauseIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
    replayIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
}

export default SingleAudioPlayer;