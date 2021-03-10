// import preact
import { h, render, Component } from 'preact';
// import stylesheets for tab
import style_tab from './style_tab';
class Tab extends Component {
  
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
		if(this.props.day == this.props.activeDay)
		{
			return (
				<div className = {style_tab.tabListActive} onClick={cFunction}>
					{this.props.children}
				</div>
			);
		}
		else{
			return (
				<div className = {style_tab.tabListItem} onClick={cFunction}>
					{this.props.children}
				</div>
			);
		}
		
	}
    
  }
  
  export default Tab;