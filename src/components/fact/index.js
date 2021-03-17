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

		const thunderstormFacts =  ["Around 2,000 thunderstorms happen on Earth every minute!", 
									"Did you know lightning often happens after a volcano erupts?", 
									"Isn't it cool that lightning can get 5 times hotter than the Sun!", 
									"Thunderstorms don't just happen on Earth, they can happen on Jupiter, Neptune, Saturn and Venus!", 
									"Did you know that thunderstorms need moisture, air and wind to form?"]

		const rainFacts =  ["In 2001, the rain was sometimes red in Kerala, India! ", 
							"Did you know that whirlwinds can make it rain fish and frogs?", 
							"Isn't it weird that Antartica is the driest place on Earth?", 
							"Rain can fall from the sky and sometimes never touch the ground! ", 
							"Did you know the smell of rain is called Petrichor?"]
							
		const snowFacts =  ["The coldest temperature in the world was -89° Celsius!", 
							"In 1684, it was so cold that the River Thames in England froze for two months!", 
							"Did you know that hail forms in thunderstorm clouds?", 
							"The world's highest weather station is on Mount Everest!", 
							"The highest temperature every recorded in Antartica is 14° Celsius!"]

		const fogFacts =   ["Did you know that fog is formed from water vapour?", 
							"Did you know that in cold places, fog can last for a whole day!", 
							"Wind and tall objects (like buildings and trees) can break fog into patches!", 
							"Fog can form when warm air blows slowly over a cool ocean or lake!", 
							"Isn't it cool that fake fog can be made using a fog machine?"]

		const clearFacts = ["Did you know the sun is a star?", 
							"Fun Fact! Over 1 million Earths could fit inside the Sun!", 
							"Fun Fact! The Sun is almost a perfect sphere!", 
							"Did you know that the Sun rises in the East and sets in the West?", 
							"It takes 8 minutes for light to travel from the Sun to the Earth!"]

		const cloudsFacts =["A cloud is a big collection of water or ice crystals that are so small they can float!", 
							"Did you know that clouds move because of the wind?", 
							"Clouds can sometimes move at a speed of 100 miles per hour!", 
							"By watching which direction clouds move, you can tell which direction the weather is coming from!", 
							"How cool is it that clouds can contain millions of tonnes of water?"]

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

			let clearFact = clearFacts[index];
			return (
				<div className = {style_fact.text}> {clearFact} </div>
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
