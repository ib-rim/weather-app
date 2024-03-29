// import preact
import { h, render, Component } from 'preact';
// import response stylesheet
import style_response from './style_response';
	
export default class Response extends Component {

	//Initial states retrieved from localStorage for saved preference
	constructor(props){
		super(props);
		this.state = {
			response: localStorage.getItem('response'), //Stores ('correctly'/'wrongly') depending on how question was answered
		}
	}

	//Rendering quiz response depending on number of points 
	render() {
		//Renders new character unlock every 5 points
		if(this.props.points == 5)
		{
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked! Tap them on the home screen to change them!</div>
					<img src="../../assets/characters/thunderstorm2.png" className={style_response.thunderstorm}></img>
				</div>
			);
		}
		else if(this.props.points == 10)
		{
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked! Tap them on the home screen to change them!</div>
					<img src="../../assets/characters/rain2.png" className={style_response.rain}></img>
				</div>
			);
		}
		else if(this.props.points == 15)
		{
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked! Tap them on the home screen to change them!</div>
					<img src="../../assets/characters/fog2.png" className={style_response.fog}></img>
				</div>
			);
		}
		else if(this.props.points == 20)
		{
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked! Tap them on the home screen to change them!</div>
					<img src="../../assets/characters/clear2.png" className={style_response.clear}></img>
				</div>
			);
		}
		else if(this.props.points == 25)
		{
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked! Tap them on the home screen to change them!</div>
					<img src="../../assets/characters/clouds2.png" className={style_response.thunderstorm}></img>
				</div>
			);
		}
		else if(this.props.points == 30)
		{
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked! Tap them on the home screen to change them!</div>
					<img src="../../assets/characters/thunderstorm2.png" className={style_response.thunderstorm}></img>
				</div>
			);
		}
		//Renders how many points until next character unlock
		else if(this.props.points < 30){
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>{5-(this.props.points%5)} more points until your next reward!</div>
				</div>
			);
		}
		//Renders default response
		else {
			return (
				<div>
					<div className={style_response.answerResponse}>
						You answered today's question {this.state.response}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
				</div>
			);
		}
		
	}

}
