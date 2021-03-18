// import preact
import { h, render, Component } from 'preact';
// import stylesheets for condition
import style_character from './style_character';
	
export default class Character extends Component {

	constructor(props){
		super(props);
		this.setState({
			character: localStorage.getItem('character'),
		})
	}

	componentDidMount() {
		if (localStorage.getItem('character') === null)
		{	
			this.setState({ 
				character: '1', 
			});	
			localStorage.setItem('character', this.state.character);
			
		}
	}

	setCharacter(num) {
		this.setState({
			character: num,
		})
		localStorage.setItem('character', num)
	}

	// rendering a character depending on the weather condition 
	render() {
		if(this.props.condition == "Thunderstorm")
		{		
			if(localStorage.getItem('points') >= 5)
			{
				if(this.state.character == '1')
				{
					return (
						<img onClick = {() => this.setCharacter('2')} src="../../assets/characters/thunderstorm.png" className = {style_character.thunderstorm}></img>
					);
				}
				return (
					<img onClick = {() => this.setCharacter('1')} src="../../assets/characters/thunderstorm2.png" className = {style_character.thunderstorm}></img>
				);			
			}
			return (
				<img src="../../assets/characters/thunderstorm.png" className = {style_character.thunderstorm}></img>
			);	
		}
		else if(this.props.condition == "Rain"){
			
			if(localStorage.getItem('points') >= 10)
			{
				if(this.state.character == '1')
				{
					return (
						<img onClick = {() => this.setCharacter('2')} src="../../assets/characters/rain.png" className = {style_character.rain}></img>
					);
				}
				return (
					<img onClick = {() => this.setCharacter('1')} src="../../assets/characters/rain2.png" className = {style_character.rain}></img>
				);			
			}
			return (
				<img src="../../assets/characters/rain.png" className = {style_character.rain}></img>
			);	
		}
		else if(this.props.condition == "Snow"){
			
			if(localStorage.getItem('points') >= 15)
			{
				if(this.state.character == '1')
				{
					return (
						<img onClick = {() => this.setCharacter('2')} src="../../assets/characters/snow.png" className = {style_character.snow}></img>
					);
				}
				return (
					<img onClick = {() => this.setCharacter('1')} src="../../assets/characters/snow2.png" className = {style_character.snow}></img>
				);			
			}
			return (
				<img src="../../assets/characters/snow.png" className = {style_character.snow}></img>
			);	
		}
		else if(this.props.condition == "Fog"){
			
			if(localStorage.getItem('points') >= 20)
			{
				if(this.state.character == '1')
				{
					return (
						<img onClick = {() => this.setCharacter('2')} src="../../assets/characters/fog.png" className = {style_character.fog}></img>
					);
				}
				return (
					<img onClick = {() => this.setCharacter('1')} src="../../assets/characters/fog2.png" className = {style_character.fog}></img>
				);			
			}
			return (
				<img src="../../assets/characters/fog.png" className = {style_character.fog}></img>
			);	
		}
		else if(this.props.condition == "Clear"){
			
			if(localStorage.getItem('points') >= 25)
			{
				if(this.state.character == '1')
				{
					return (
						<img onClick = {() => this.setCharacter('2')} src="../../assets/characters/clear.png" className = {style_character.clear}></img>
					);
				}
				return (
					<img onClick = {() => this.setCharacter('1')} src="../../assets/characters/clear2.png" className = {style_character.clear}></img>
				);			
			}
			return (
				<img src="../../assets/characters/clear.png" className = {style_character.clear}></img>
			);	
		}
		else if(this.props.condition == "Clouds"){
			
			if(localStorage.getItem('points') >= 30)
			{
				if(this.state.character == '1')
				{
					return (
						<img onClick = {() => this.setCharacter('2')} src="../../assets/characters/clouds.png" className = {style_character.clouds}></img>
					);
				}
				return (
					<img onClick = {() => this.setCharacter('1')} src="../../assets/characters/clouds2.png" className = {style_character.clouds}></img>
				);			
			}
			return (
				<img src="../../assets/characters/clouds.png" className = {style_character.clouds}></img>
			);	
		}
		
	}

}
