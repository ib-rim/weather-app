// import preact
import { h, render, Component } from 'preact';
// import condition stylesheet
import style_condition from './style_condition';
	
export default class Condition extends Component {

	constructor(props){
		super(props);
	}

	//Rendering an icon depending on the weather condition 
	render() {
		if(this.props.condition == "Thunderstorm")
		{
			return (
				<img src="../../assets/icons/thunderstorm.png" className = {style_condition.icon}></img>
			);
		}
		else if(this.props.condition == "Rain"){
			return (
				<img src="../../assets/icons/rain.png" className = {style_condition.icon}></img>
			);
		}
		else if(this.props.condition == "Snow"){
			return (
				<img src="../../assets/icons/snow.png" className = {style_condition.icon}></img>
			);
		}
		else if(this.props.condition == "Fog"){
			return (
				<img src="../../assets/icons/fog.png" className = {style_condition.icon}></img>
			);
		}
		else if(this.props.condition == "Clear"){
			return (
				<img src="../../assets/icons/clear.png" className = {style_condition.icon}></img>
			);
		}
		else if(this.props.condition == "Clouds"){
			return (
				<img src="../../assets/icons/clouds.png" className = {style_condition.icon}></img>
			);
		}
		
	}

}
