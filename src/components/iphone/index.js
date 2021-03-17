// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad, button and tabs
import style from './style';
import style_tabs from '../tabs/style_tabs';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';
// import the Tab component
import Tab from '../tab';
// import the Container component
import Container from '../container';
// import the Condition component
import Condition from '../condition';
// import the Character component
import Character from '../character';
// import the Fact component
import Fact from '../fact';
// import the Fact component
import Quiz from '../quiz';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);

		this.state = {
			activeDay: 0,
			activePage: "main",
			retrieved: false,
		}	
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "https://api.openweathermap.org/data/2.5/onecall?lat=51.5704&lon=-0.1278&units=metric&appid=db85a9b67f871c6286d826fef1aa1ff8";
		//var url = "https://api.openweathermap.org/data/2.5/onecall?lat=-37.8136&lon=144.96318&units=metric&appid=e26d7a2d9dcde526549b30e79ba7c22e";
		//var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e26d7a2d9dcde526549b30e79ba7c22e";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}

	componentDidMount() {
		this.fetchWeatherData();
	}

	changeDay(day) {
		this.state.activeDay = day;
		this.fetchWeatherData();
	}

	changePage(page) {
		this.setState({
			activePage: page,
		})
	}

	// the main render method for the iphone component
	render() {
		
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		const monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		
		
		//Makes sure weather data has been retrieved before rendering anything
		if (this.state.retrieved)
		{	
			//Renders main page with weather data, day selection, fun fact and character
			if(this.state.activePage == "main"){
				return (
					<Container condition = {this.state.cond}>
						<div className = {style_tabs.tabList}>
							<Tab day = {0} activeDay = {this.state.activeDay} clickFunction = {() => this.changeDay(0)}> 
								Today
							</Tab>
							<Tab day = {1} activeDay = {this.state.activeDay} clickFunction = {() => this.changeDay(1)}> 
								Tomorrow
							</Tab>
							<Tab day = {2} activeDay = {this.state.activeDay} clickFunction = {() => this.changeDay(2)}> 
								{monthNames[new Date().getMonth()]} {new Date().getDate()+2}
							</Tab>
							<Tab day = {3} activeDay = {this.state.activeDay} clickFunction = {() => this.changeDay(3)}> 
								{monthNames[new Date().getMonth()]} {new Date().getDate()+3}
							</Tab>  
						</div>
						<div className = {style.weatherData}>
							<div className={ style.city }>{ this.state.locate }</div>
							<div className={ style.conditions }>{ this.state.desc }</div>
							<div className={ tempStyles }>{ this.state.temp}</div>
							<span className={ style.temperature }></span>
						</div>
						<div className = {style.textBox}>
							<Fact condition = {this.state.cond}></Fact>
						</div>
						<Character condition = {this.state.cond}></Character>
						<Button side = "right" clickFunction={ () => this.changePage("quiz") }>?</Button>
					</Container>
				);
			}
			//Renders quiz page with question, answer, response and points
			else if (this.state.activePage == "quiz")
			{
				return (
					<Container condition = {this.state.cond}>
						<Quiz condition = {this.state.cond}> </Quiz>
						<Button side = "left" clickFunction={ () => this.changePage("main") }>&lt;</Button>
					</Container>
				);
			}
		}
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['timezone'];
		var temp_c = Math.round(parsed_json['daily'][this.state.activeDay]['temp']['day']);
		var condition = parsed_json['daily'][this.state.activeDay]['weather']['0']['main']
		var description = parsed_json['daily'][this.state.activeDay]['weather']['0']['description'];

		this.setState({
			//Set states for weather info depending on day so they could be rendered later on
			locate: location,
			temp: temp_c,
			cond : condition,
			desc: description,
			//Set state to note first API call so the page doesn't render without weather data
			retrieved: true,
		});  
	}

}