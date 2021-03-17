// import preact
import { h, render, Component } from 'preact';
// import stylesheets for condition
import style_response from './style_response';
	
export default class Response extends Component {

	constructor(props){
		super(props);

	}

	// rendering a background depending on the weather condition 
	render() {
		if(this.props.points == 5)
		{
			return (
				<div>
					<div className={style_response.answerResponseTop}>
						You answered today's question {this.props.answerResponse}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked!</div>
					<img src="../../assets/characters/thunderstorm2.png" className={style_response.thunderstorm}></img>
				</div>
			);
		}
		else if(this.props.points == 10)
		{
			return (
				<div>
					<div className={style_response.answerResponseTop}>
						You answered today's question {this.props.answerResponse}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked!</div>
					<img src="../../assets/characters/rain2.png" className={style_response.rain}></img>
				</div>
			);
		}
		else if(this.props.points == 15)
		{
			return (
				<div>
					<div className={style_response.answerResponseTop}>
						You answered today's question {this.props.answerResponse}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked!</div>
					<img src="../../assets/characters/fog2.png" className={style_response.fog}></img>
				</div>
			);
		}
		else if(this.props.points == 20)
		{
			return (
				<div>
					<div className={style_response.answerResponseTop}>
						You answered today's question {this.props.answerResponse}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked!</div>
					<img src="../../assets/characters/clear2.png" className={style_response.clear}></img>
				</div>
			);
		}
		else if(this.props.points == 25)
		{
			return (
				<div>
					<div className={style_response.answerResponseTop}>
						You answered today's question {this.props.answerResponse}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked!</div>
					<img src="../../assets/characters/clouds2.png" className={style_response.thunderstorm}></img>
				</div>
			);
		}
		else if(this.props.points == 30)
		{
			return (
				<div>
					<div className={style_response.answerResponseTop}>
						You answered today's question {this.props.answerResponse}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
					<div className={style_response.characterResponse}>New character unlocked! Click them on the home screen!</div>
					<img src="../../assets/characters/thunderstorm2.png" className={style_response.thunderstorm}></img>
				</div>
			);
		}
		else {
			return (
				<div>
					<div className={style_response.answerResponseMid}>
						You answered today's question {this.props.answerResponse}!
					</div>
					<div className={style_response.points}>Points: {this.props.points}</div>
				</div>
			);
		}
		
	}

}
