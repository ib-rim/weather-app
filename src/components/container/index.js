// import preact
import { h, render, Component } from 'preact';
// import stylesheets for container
import style_container from './style_container';

export default class Container extends Component {
  
  constructor(props){
		super(props);
	}

	// rendering a background depending on the weather condition 
	render() {
		if(this.props.condition == "Thunderstorm")
		{
			return (
				<div className = {style_container.main} id = {style_container.thunderstorm}>
					{this.props.children}
				</div>
			);
		}
		else if(this.props.condition == "Rain"){
			return (
				<div className = {style_container.main} id = {style_container.rain}>
					{this.props.children}
				</div>
			);
		}
		else if(this.props.condition == "Snow"){
			return (
				<div className = {style_container.main} id = {style_container.snow}>
					{this.props.children}
				</div>
			);
		}
		else if(this.props.condition == "Fog"){
			return (
				<div className = {style_container.main} id = {style_container.fog}>
					{this.props.children}
				</div>
			);
		}
		else if(this.props.condition == "Clear"){
			return (
				<div className = {style_container.main} id = {style_container.clear}>
					{this.props.children}
				</div>
			);
		}
		else if(this.props.condition == "Clouds"){
			return (
				<div className = {style_container.main} id = {style_container.clouds}>
					{this.props.children}
				</div>
			);
		}
		else {
			return (
				<div className = {style_container.quiz}>
					{this.props.children}
				</div>
			);
		}
		
	}
    
  }
  
