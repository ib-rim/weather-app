// import preact
import { h, render, Component } from 'preact';
// import stylesheets for condition
import style_character from './style_character';
	
export default class Character extends Component {

	constructor(props){
		super(props);
	}

	// rendering a background depending on the weather condition 
	render() {
		if(this.props.condition == "Thunderstorm")
		{
			return (
				<img src="../../assets/characters/thunderstorm.png" className = {style_character.thunderstorm}></img>
			);
		}
		else if(this.props.condition == "Rain"){
			return (
				<img src="../../assets/characters/rain.png" className = {style_character.rain}></img>
			);
		}
		else if(this.props.condition == "Snow"){
			return (
				<img src="../../assets/characters/snow.png" className = {style_character.snow}></img>
			);
		}
		else if(this.props.condition == "Fog"){
			return (
				<img src="../../assets/characters/fog.png" className = {style_character.fog}></img>
			);
		}
		else if(this.props.condition == "Clear"){
			return (
				<img src="../../assets/characters/clear.png" className = {style_character.clear}></img>
			);
		}
		else if(this.props.condition == "Clouds"){
			return (
				<img src="../../assets/characters/clouds.png" className = {style_character.clouds}></img>
			);
		}
		
	}

}
