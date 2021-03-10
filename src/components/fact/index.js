// import preact
import { h, render, Component } from 'preact';
// import stylesheets for condition
import style_fact from './style_fact';
	
export default class Fact extends Component {

	constructor(props){
		super(props);
	}	

	// rendering a background depending on the weather condition 
	render() {
		let index = Math.floor(Math.random() * 5);

		const thunderstormFacts = ["Thunderstorm 1", "Thunderstorm 2", "Thunderstorm 2", "Thunderstorm 4", "Thunderstorm 5"]
		const rainFacts = ["Rain 1", "Rain 2", "Rain 3", "Rain 4", "Rain 5"]
		const snowFacts = ["Snow 1", "Snow 2", "Snow 3", "Snow 4", "Snow 5"]
		const fogFacts = ["Fog 1", "Fog 2", "Fog 3", "Fog 4", "Fog 5"]
		const clearFacts = ["Clear 1", "Clear 2", "Clear 3", "Clear 4", "Clear 5"]
		const cloudsFacts = ["Clouds 1", "Clouds 2", "Clouds 3", "Clouds 4", "Clouds 5"]

		if(this.props.condition == "Thunderstorm"){	

			let thunderstormFact = thunderstormFacts[index];
			return (
				<div className = {style_fact.text}> {thunderstormFact} </div>
			);
		}
		else if(this.props.condition == "Rain"){

			let rainFact = rainFacts[index];
			return (
				<div className = {style_fact.text}> {rainFact} </div>
			);
		}
		else if(this.props.condition == "Snow"){

			let snowFact = snowFacts[index];
			return (
				<div className = {style_fact.text}> {snowFact} </div>
			);
		}
		else if(this.props.condition == "Fog"){

			let fogFact = fogFacts[index];
			return (
				<div className = {style_fact.text}> {fogFact} </div>
			);
		}
		else if(this.props.condition == "Clear"){

			let fogFact = clearFacts[index];
			return (
				<div className = {style_fact.text}> {fogFact} </div>
			);
		}
		else if(this.props.condition == "Clouds"){

			let cloudsFact = cloudsFacts[index];
			return (
				<div className = {style_fact.text}> {cloudsFact} </div>
			);
		}
		
	}

}
