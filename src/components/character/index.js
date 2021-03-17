// import preact
import { h, render, Component } from 'preact';
// import stylesheets for condition
import style_character from './style_character';
	
export default class Character extends Component {

	constructor(props){
		super(props);
		this.state = {
			default: true,
		}
	}

	changeChar(bool) {
		this.setState({
			default: bool,
		})
	}

	// rendering a background depending on the weather condition 
	render() {
		if(this.props.condition == "Thunderstorm")
		{	
			if(this.state.default)
			{	
				if(localStorage.getItem('points') >= 5)
				{
					return (
						<img onClick = {() => this.changeChar(false)} src="../../assets/characters/thunderstorm.png" className = {style_character.thunderstorm}></img>
					);
				}
				return (
					<img src="../../assets/characters/thunderstorm.png" className = {style_character.thunderstorm}></img>
				);
			}
			else {
				return (
					<img onClick = {() => this.changeChar(true)} src="../../assets/characters/thunderstorm2.png" className = {style_character.thunderstorm}></img>
				);
			}
			
		}
		else if(this.props.condition == "Rain"){
			
			if(this.state.default)
			{
				if(localStorage.getItem('points') >= 10)
				{
					return (
						<img onClick = {() => this.changeChar(false)} src="../../assets/characters/rain.png" className = {style_character.rain}></img>
					);
				}
				return (
					<img src="../../assets/characters/rain.png" className = {style_character.rain}></img>
				);
			}
			else {
				return (
					<img onClick = {() => this.changeChar(true)} src="../../assets/characters/rain2.png" className = {style_character.rain}></img>
				);
			}
		}
		else if(this.props.condition == "Snow"){
			
			if(this.state.default)
			{
				if(localStorage.getItem('points') >= 15)
				{
					return (
						<img onClick = {() => this.changeChar(false)} src="../../assets/characters/snow.png" className = {style_character.snow}></img>
					);
				}
				return (
					<img src="../../assets/characters/snow.png" className = {style_character.snow}></img>
				);
			}
			else {
				return (
					<img onClick = {() => this.changeChar(true)} src="../../assets/characters/snow2.png" className = {style_character.snow}></img>
				);
			}
		}
		else if(this.props.condition == "Fog"){
			
			if(this.state.default)
			{
				if(localStorage.getItem('points') >= 20)
				{
					return (
						<img onClick = {() => this.changeChar(false)} src="../../assets/characters/fog.png" className = {style_character.fog}></img>
					);
				}
				return (
					<img src="../../assets/characters/fog.png" className = {style_character.fog}></img>
				);
			}
			else {
				return (
					<img onClick = {() => this.changeChar(true)} src="../../assets/characters/fog2.png" className = {style_character.fog}></img>
				);
			}
		}
		else if(this.props.condition == "Clear"){
			
			if(this.state.default)
			{
				if(localStorage.getItem('points') >= 25)
				{
					return (
						<img onClick = {() => this.changeChar(false)} src="../../assets/characters/clear.png" className = {style_character.clear}></img>
					);
				}
				return (
					<img src="../../assets/characters/clear.png" className = {style_character.clear}></img>
				);
			}
			else {
				return (
					<img onClick = {() => this.changeChar(true)} src="../../assets/characters/clear2.png" className = {style_character.clear}></img>
				);
			}
		}
		else if(this.props.condition == "Clouds"){
			
			if(this.state.default)
			{
				if(localStorage.getItem('points') >= 30)
				{
					return (
						<img onClick = {() => this.changeChar(false)} src="../../assets/characters/clouds.png" className = {style_character.clouds}></img>
					);
				}
				return (
					<img src="../../assets/characters/clouds.png" className = {style_character.clouds}></img>
				);
			}
			else {
				return (
					<img onClick = {() => this.changeChar(true)} src="../../assets/characters/clouds2.png" className = {style_character.clouds}></img>
				);
			}
		}
		
	}

}
