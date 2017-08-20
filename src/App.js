import React, { Component } from 'react';
import './assets/css/App.css';
import bg from './assets/img/bg.jpg';
import bgVideoWebm from './assets/video/output.webm';
import bgVideoOgv from './assets/video/output.ogv';
import bgVideoMp4 from './assets/video/output.mp4';
import audio from './assets/audio/Elvis_Presley_-_Oh_my_love.mp3';

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

  class Content extends Component {
	render() {
	  return (
		  <div />
	  );
	}
  }

  class App extends Component {
	render() {
	  return (
		<div className="wrp">
			<Audio />
			<Video />
			<Content />
		</div>
	  );
	}
  }

export default App;