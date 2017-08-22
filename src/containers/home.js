import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	play_music,
} from '../modules/app'

import '../assets/css/App.css';
import bg from '../assets/img/bg.jpg';
import bgVideoWebm from '../assets/video/output.webm';
import bgVideoOgv from '../assets/video/output.ogv';
import bgVideoMp4 from '../assets/video/output.mp4';
import audio from '../assets/audio/Elvis_Presley_-_Oh_my_love.mp3';

class Audio extends Component {
  render() {
    return (
		<audio src={audio} autoPlay="true" loop="loop"></audio>
    );
  }
}

class Video extends Component {
	render() {
	  return (
		  <video className="bg_video" poster={bg} playsInline="true" autoPlay="true" muted="true" loop="loop">
			  <source src={bgVideoWebm} type="video/webm" />
			  <source src={bgVideoOgv} type="video/ogv" />
			  <source src={bgVideoMp4} type="video/mp4" />
		  </video>
	  );
	}
  }

const Home = props => (
	<div className="wrp">
		<Audio />
		<Video />
		<div>
			<h1>Home</h1>
			<div>
				<button onClick={() => props.play_music(!props.is_playing_music)}>Play</button>
			</div>
		</div>
	</div>
)

const mapStateToProps = state => ({
	is_playing_music: state.app.is_playing_music,
})
  
  const mapDispatchToProps = dispatch => bindActionCreators({
	play_music,
  }, dispatch)
  

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)