import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    return (
      <div className="controls" style={{height: this.props.height}}>
      {this.props.showPrev ? this.props.prevIcon ? <span onClick={this.props.onClick}>{this.props.prevIcon}</span> : <span className="controlText" onClick={this.props.onClick}>previous</span> : ''}
      {!this.props.playing && !this.props.endReached && this.props.currentPlayTime <= 0? this.props.playIcon ? <span onClick={this.props.play}>{this.props.playIcon}</span> : <span className="controlText"
          onClick={this.props.play}>play</span> : ''}
          {!this.props.playing && !this.props.endReached && this.props.currentPlayTime > 0 ? this.props.playIcon ? <span onClick={this.props.resumeAudio}>{this.props.playIcon}</span> : <span className="controlText"
          onClick={this.props.resumeAudio}>resume</span> : ''}
      {this.props.playing && this.props.showPause ? this.props.pauseIcon ? <span onClick={this.props.pause}>{this.props.pauseIcon}</span>:<span className="controlText" 
          onClick={this.props.pause}>pause</span> : ''}
      {!this.props.playing && this.props.currentPlayTime > 0 && this.props.showReplay ? this.props.replayIcon ? <span onClick={this.props.play}>{this.props.replayIcon}</span> :
          <span className="controlText" onClick={this.props.play}>replay</span> : ''}
      {this.props.showNext ? this.props.nextIcon ? <span onClick={this.props.onClick}>{this.props.nextIcon}</span> : <span className="controlText" onClick={this.props.onClick}>next</span> : ''}
      </div>
    );
  }
}