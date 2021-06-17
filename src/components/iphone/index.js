// import preact
import { h, render, Component } from 'preact';
// import stylesheets (Button and Tabs))
import style from './style';
import style_tabs from '../tabs/style_tabs';
// import jquery for API calls
import $ from 'jquery';
// import components (Button, Tab, Container, Character, Fact and Quiz)
import Button from '../button';
import Tab from '../tab';
import Container from '../container';
import Character from '../character';
import Fact from '../fact';
import Quiz from '../quiz';

export default class Iphone extends Component {

	//Cconstructor with initial set states
	constructor(props){
		super(props);

		this.state = {
			activeDay: 0, //Tracks which day is selected for tab component/weather data fetch
			activePage: "main", //Tracks which page to display
			retrieved: false, //Tracks first API call and data retrieval
		}	
	}

	//Call to fetch weather data via OpenWeather API
	fetchWeatherData = () => {
		var url = "https://api.openweathermap.org/data/2.5/onecall?lat=51.5704&lon=-0.1278&units=metric&appid=db85a9b67f871c6286d826fef1aa1ff8";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

	}

	//Fetches weather data on load 
	componentDidMount() {
		this.fetchWeatherData();
	}

	//Changes activeDay and calls API to get appropriate weather data 
	changeDay(day) {
		this.state.activeDay = day;
		this.fetchWeatherData();
	}

	//Changes activePage to change which components are displayed
	changePage(page) {
		this.setState({
			activePage: page,
		})
	
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		
		//Month names for tab component
		const monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				
		//Makes sure weather data has been retrieved before rendering anything
		if (this.state.retrieved)
		{	
			//Renders main page with weather data, day selection tabs, fun fact, character and page change button
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
			//Renders quiz page with question, answer, response, points and page change button
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

	//Parses API call response (jsonp) to set appropriate states
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