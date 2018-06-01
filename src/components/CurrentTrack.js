import React from 'react';
import PropTypes from 'prop-types';

const CurrentTrack = (props) => (
    <audio ref={props.setAudioElement} src={props.source}
        onLoadedMetadata={props.setTotalDuration} onTimeUpdate={props.setCurrentPlayTime} 
        onEnded={props.setEnded} onPlaying={props.setPlaying}
    />
)

CurrentTrack.propTypes = {
    source: PropTypes.string.isRequired
}

export default CurrentTrack;