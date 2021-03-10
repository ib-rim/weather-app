// import preact
import { h, render, Component } from 'preact';
import style_button from './style_button';
	
export default class Button extends Component {

	constructor(props){
		super(props);
	}

	// rendering a function when the button is clicked
	render() {
		let cFunction = this.props.clickFunction;
		if(typeof cFunction !== 'function'){
			cFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
			<div className= { style_button.container }>
				<button onClick={cFunction} className={ style_button.button }>{this.props.children}</button>
			</div>
		);
	}

}
