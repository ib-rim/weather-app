// import preact
import { h, render, Component } from 'preact';
// import button stylesheet
import style_button from './style_button';
	
export default class Button extends Component {

	constructor(props){
		super(props);
	}

	render() {
		//Making sure a function has been passed to the button component
		let cFunction = this.props.clickFunction;
		if(typeof cFunction !== 'function'){
			cFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}

		//Change position of button through stylesheet (containerLeft / containerRight)
		if (this.props.side == "right")
		{	
			return (
				<div className= {style_button.containerRight}>
					<button className= {style_button.button} onClick={cFunction} className={ style_button.button }>{this.props.children}</button>
				</div>
			);
		}
		else if (this.props.side == "left") 
		{
			return (
				<div className= {style_button.containerLeft}>
					<button className= {style_button.button} onClick={cFunction} className={ style_button.button }>{this.props.children}</button>
				</div>
			);
		}
		
	}

}
