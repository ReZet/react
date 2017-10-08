import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {
	play_music,
} from '../modules/app'

import '../assets/css/App.css';
/*import bg from '../assets/img/bg.jpg';
import bgVideoWebm from '../assets/video/output.webm';
import bgVideoOgv from '../assets/video/output.ogv';
import bgVideoMp4 from '../assets/video/output.mp4';*/
import audio from '../assets/audio/dendy-9999-in-1-elvis-presley-only-you.mp3';

class Audio extends Component {
  render() {
    return (
		<audio src={audio} autoPlay="true" loop="loop"></audio>
    );
  }
}

/*class Video extends Component {
	render() {
		return (
			<video className="bg_video" poster={bg} playsInline="true" autoPlay="true" muted="true" loop="loop">
				<source src={bgVideoWebm} type="video/webm" />
				<source src={bgVideoOgv} type="video/ogv" />
				<source src={bgVideoMp4} type="video/mp4" />
			</video>
		);
	}
}*/

const Home = props => (
	<div className="wrp">
		<header>
			<div className="flexbox">
				<div className="progress">
					<progress value="5" max="100" /><span className="progress_icon">♥</span>
				</div>
				<div className="change_lang">
					<select>
						<option value="en">EN</option>
						<option value="ru">RU</option>
					</select>
				</div>
				<div className="progress">
					<span className="progress_icon">$</span><progress value="5" max="100" />
				</div>
			</div>
			<h1>Welcome&nbsp;to <span className="uppercase">Dmitrii&nbsp;Karpov</span> home&nbsp;page</h1>
		</header>
		<main>			
			<i>Likes, Money, Visitirs, Age</i>			
			<ul className="links">
				<li>
					<Link to="https://www.linkedin.com/in/dmitrii-karpov/" target="_blank">LinkedIn</Link>
				</li>
				<li>
					<Link to="https://www.facebook.com/xDyPx" target="_blank">Facebook</Link>
				</li>
				<li>
					<Link to="https://vk.com/rezet" target="_blank">VK</Link>
				</li>
				<li>
					<Link to="https://www.youtube.com/user/MultiRevers" target="_blank">YouTube</Link>
				</li>
				<li>
					<Link to="https://www.instagram.com/re_zet/" target="_blank">Instagram</Link>
				</li>
				<li>
					<Link to="https://soundcloud.com/re-zet" target="_blank">SoundCloud</Link>
				</li>
				<li>
					<Link to="mail:xdypx@yandex.ru" target="_blank">Email</Link>
				</li>
			</ul>
			<button onClick={() => props.play_music(!props.is_playing_music)}>Play {String(props.is_playing_music)}</button>
			<div>*For those who lazily look for my social networks :)</div>
		</main>
		<footer>
			<div className="container">
				<div className="copyright">
					&copy; 2017
				</div>
			</div>
		</footer>
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