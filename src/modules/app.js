export const PLAY_MUSIC = 'app/PLAY_MUSIC';
export const STOP_MUSIC = 'app/STOP_MUSIC';

const initialState = {
  is_playing_music: true
}

export default (state = initialState, action) => {
	switch (action.type) {
		case PLAY_MUSIC:
			return {
				...state,
				is_playing_music: true
			}

		case STOP_MUSIC:
			return {
				...state,
				is_playing_music: false,
			}

		default:
			return state
	}
}

export const play_music = (to_play) => {
	console.log(to_play);
	if (to_play) {
		return dispatch => {
			dispatch({
				type: PLAY_MUSIC
			})
		}
	} else {
		return dispatch => {
			dispatch({
				type: STOP_MUSIC
			})
		}
	}
}