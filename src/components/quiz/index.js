// import preact
import { h, render, Component } from 'preact';
// import stylesheets for condition
import style_quiz from './style_quiz';
//
import Response from '../response';
	
export default class Quiz extends Component {

	//Initial states retrieved from localStorage for saved preference
	constructor(props){
		super(props);
		this.state = {
			showQuestion: localStorage.getItem('showQuestion'), //Keeps track of whether to display question or response
			points: parseFloat(localStorage.getItem('points')), //Keeps track of points earned from quiz
		}
	}

	
	componentDidMount() {

		//Sets default states on first load
		console.log(localStorage.getItem('showQuestion'));
		if (localStorage.getItem('points') === null)
		{	
			this.setState({ 
				points: 0, 
			});	
			localStorage.setItem('points', this.state.points);
			
		}
		if (localStorage.getItem('showQuestion') === null)
		{	
			this.setState({ 
				showQuestion: 'true', 
			});
			localStorage.setItem('showQuestion', this.state.showQuestion);
				
		}
		if (localStorage.getItem('date') === null)
		{
			localStorage.setItem('date', new Date().getDate());
		}

		//Resets showQuestion state on new day
		if(localStorage.getItem('date') != new Date().getDate())
		{
			this.setState({ 
				showQuestion: 'true', 
			});
			localStorage.setItem('showQuestion', this.state.showQuestion);
			localStorage.setItem('date', new Date().getDate());
		}
	}

	//Rendering random quiz question depending on the weather condition 
	render() {
		//Random number (0-4) used as index to select random question from array
		let index = Math.floor(Math.random() * 5);

		//Weather question arrays
		const thunderstormQuestions = [
			{
				questionText: 'What is a thunderstorm?',
				answerOptions: [
					{ answerText: 'Just Wind', isCorrect: false },
					{ answerText: 'Just Rain', isCorrect: false },
					{ answerText: 'Lightning and Thunder', isCorrect: true },
				],
			},
			{
				questionText: 'What causes a thunderstorm?',
				answerOptions: [
					{ answerText: 'Angry clouds', isCorrect: false },
					{ answerText: 'Moisture, air and wind', isCorrect: true },
					{ answerText: 'Too much wind', isCorrect: false },
				],
			},
			{
				questionText: 'How many thunderstorms are there every day?',
				answerOptions: [
					{ answerText: '1,800', isCorrect: true },
					{ answerText: '10', isCorrect: false },
					{ answerText: '0', isCorrect: false },
				],
			},
			{
				questionText: 'What is lightning?',
				answerOptions: [
					{ answerText: 'Yellow air', isCorrect: false },
					{ answerText: 'Electricity from the ground', isCorrect: false },
					{ answerText: 'Electricity caused by a thunderstorm', isCorrect: true },
				],
			},
			{
				questionText: 'What causes thunder?',
				answerOptions: [
					{ answerText: 'Lightning', isCorrect: true },
					{ answerText: 'An earthquake', isCorrect: false },
					{ answerText: 'The clouds', isCorrect: false },
				],
			},
		];

		const rainQuestions = [
			{
				questionText: 'What is rain?',
				answerOptions: [
					{ answerText: 'Orange juice', isCorrect: false },
					{ answerText: 'Lemonade', isCorrect: false },
					{ answerText: 'Water droplets', isCorrect: true },
				],
			},
			{
				questionText: 'What causes rain?',
				answerOptions: [
					{ answerText: 'A lot of wind', isCorrect: false },
					{ answerText: 'The clouds', isCorrect: true },
					{ answerText: 'The sun', isCorrect: false },
				],
			},
			{
				questionText: 'How big are raindrops?',
				answerOptions: [
					{ answerText: 'Less than 1cm', isCorrect: true },
					{ answerText: '10cm', isCorrect: false },
					{ answerText: '5cm', isCorrect: false },
				],
			},
			{
				questionText: 'What is a flood?',
				answerOptions: [
					{ answerText: 'The clouds turning into water', isCorrect: false },
					{ answerText: 'Too much snow in a normally dry area', isCorrect: false },
					{ answerText: 'Too much water in a normally dry area', isCorrect: true },
				],
			},
			{
				questionText: 'Where is the driest place on Earth?',
				answerOptions: [
					{ answerText: 'Antarctica', isCorrect: true },
					{ answerText: 'Sahara Desert', isCorrect: false },
					{ answerText: 'London', isCorrect: false },
				],
			},
		];

		const snowQuestions = [
			{
				questionText: 'What colour is snow?',
				answerOptions: [
					{ answerText: 'White', isCorrect: false },
					{ answerText: 'Blue', isCorrect: false },
					{ answerText: 'They have no colour', isCorrect: true },
				],
			},
			{
				questionText: 'What temperature is snow?',
				answerOptions: [
					{ answerText: 'Very hot', isCorrect: false },
					{ answerText: 'Very cold', isCorrect: true },
					{ answerText: 'Just warm', isCorrect: false },
				],
			},
			{
				questionText: 'How is snow formed?',
				answerOptions: [
					{ answerText: 'When raindrops are really cold, they become snow', isCorrect: true },
					{ answerText: 'They are clouds breaking apart', isCorrect: false },
					{ answerText: 'Water from space becomes snow', isCorrect: false },
				],
			},
			{
				questionText: 'What are snowflakes?',
				answerOptions: [
					{ answerText: 'Pieces of clouds', isCorrect: false },
					{ answerText: 'Just Christmas decorations', isCorrect: false },
					{ answerText: 'Ice crystals', isCorrect: true },
				],
			},
			{
				questionText: 'What is thundersnow?',
				answerOptions: [
					{ answerText: 'When snow falls during a thunderstorm', isCorrect: true },
					{ answerText: 'When snow has electricity in it', isCorrect: false },
					{ answerText: 'When snow has thunder in it', isCorrect: false },
				],
			},
		];

		const fogQuestions = [
			{
				questionText: 'Which season do you usually see fog in?',
				answerOptions: [
					{ answerText: 'Autumn', isCorrect: false },
					{ answerText: 'Spring', isCorrect: false },
					{ answerText: 'Winter', isCorrect: true },
				],
			},
			{
				questionText: 'What is fog made of?',
				answerOptions: [
					{ answerText: 'Smoke', isCorrect: false },
					{ answerText: 'Tiny drops of water', isCorrect: true },
					{ answerText: 'Cotton candy', isCorrect: false },
				],
			},
			{
				questionText: 'Why does fog disappear?',
				answerOptions: [
					{ answerText: 'The temperature increases', isCorrect: true },
					{ answerText: 'It sleeps during the day', isCorrect: false },
					{ answerText: 'The temperature decreases', isCorrect: false },
				],
			},
			{
				questionText: 'How does the fog affect people?',
				answerOptions: [
					{ answerText: 'It makes it harder to see', isCorrect: false },
					{ answerText: 'It makes it easier to see', isCorrect: false },
					{ answerText: 'It makes it harder to breathe', isCorrect: true },
				],
			},
			{
				questionText: 'How quickly can fog form?',
				answerOptions: [
					{ answerText: 'Really quickly', isCorrect: true },
					{ answerText: 'Really slowly', isCorrect: false },
					{ answerText: 'Faster than light', isCorrect: false },
				],
			},
		];

		const clearQuestions = [
			{
				questionText: 'Which of these is a star?',
				answerOptions: [
					{ answerText: 'The Moon', isCorrect: false },
					{ answerText: 'The Earth', isCorrect: false },
					{ answerText: 'The Sun', isCorrect: true },
				],
			},
			{
				questionText: 'What direction does the sun rise in?',
				answerOptions: [
					{ answerText: 'West', isCorrect: false },
					{ answerText: 'East', isCorrect: true },
					{ answerText: 'North', isCorrect: false },
				],
			},
			{
				questionText: 'What direction does the sun set in?',
				answerOptions: [
					{ answerText: 'West', isCorrect: true },
					{ answerText: 'East', isCorrect: false },
					{ answerText: 'South', isCorrect: false },
				],
			},
			{
				questionText: 'What colour is the sun?',
				answerOptions: [
					{ answerText: 'White', isCorrect: false },
					{ answerText: 'Blue', isCorrect: false },
					{ answerText: 'Yellow', isCorrect: true },
				],
			},
			{
				questionText: 'Why is the sky blue?',
				answerOptions: [
					{ answerText: 'The air scatters more blue light from the Sun than other colours', isCorrect: true },
					{ answerText: 'Space is blue', isCorrect: false },
					{ answerText: 'The Moon shines blue light on the Earth', isCorrect: false },
				],
			},
		];

		const cloudsQuestions = [
			{
				questionText: 'What are clouds made of?',
				answerOptions: [
					{ answerText: 'Cotton Candy', isCorrect: false },
					{ answerText: 'Smoke', isCorrect: false },
					{ answerText: 'Tiny drops of water', isCorrect: true },
				],
			},
			{
				questionText: 'What do clouds hold?',
				answerOptions: [
					{ answerText: 'Orange juice', isCorrect: false },
					{ answerText: 'Water', isCorrect: true },
					{ answerText: 'Lemonade', isCorrect: false },
				],
			},
			{
				questionText: 'What colours are clouds?',
				answerOptions: [
					{ answerText: 'White and Grey', isCorrect: true },
					{ answerText: 'Pink and Orange', isCorrect: false },
					{ answerText: 'Green and Blue', isCorrect: false },
				],
			},
			{
				questionText: 'Why are clouds so high up in the sky?',
				answerOptions: [
					{ answerText: 'They have wings', isCorrect: false },
					{ answerText: 'Airplanes lift them up', isCorrect: false },
					{ answerText: 'They can only form at that height', isCorrect: true },
				],
			},
			{
				questionText: 'How do clouds move?',
				answerOptions: [
					{ answerText: 'The wind moves them', isCorrect: true },
					{ answerText: 'They have wings', isCorrect: false },
					{ answerText: 'Airplanes move them', isCorrect: false },
				],
			},
		];
		
		//Adjusts states depending on whether question was answered correctly or incorrectly
		const questionAnswered = (isCorrect) => {
			
			if (isCorrect) {
				const newPoints = this.state.points + 1;
				this.setState({ 
					points: newPoints,
					response: "correctly",
					showQuestion: 'false', 
				});	
				localStorage.setItem('points', this.state.points)
				
			}
			else {
				this.setState({ 
					response: "wrong", 
					showQuestion: 'false',
				});
			}
			localStorage.setItem('response', this.state.response);
			localStorage.setItem('showQuestion', this.state.showQuestion);
		};

		if(this.state.showQuestion == 'true')
		{
			if(this.props.condition == "Thunderstorm"){	

				return (
					<div>
						<div className={style_quiz.points}>Points: {this.state.points}</div>
						<div className={style_quiz.question}>{thunderstormQuestions[index].questionText}</div>
						<div>
							{thunderstormQuestions[index].answerOptions.map((answerOption) => (
								<div className={style_quiz.answer} onClick={() => questionAnswered(answerOption.isCorrect)}>{answerOption.answerText}</div>
							))}
						</div>
					</div>
				);
				
			}
			else if(this.props.condition == "Rain"){
				
				return (
					<div>
						<div className={style_quiz.points}>Quiz Time! Points: {this.state.points}</div>
						<div className={style_quiz.question}>{rainQuestions[index].questionText}</div>
						<div>
							{rainQuestions[index].answerOptions.map((answerOption) => (
								<div className={style_quiz.answer} onClick={() => questionAnswered(answerOption.isCorrect)}>{answerOption.answerText}</div>
							))}
						</div>
					</div>
				);
				
			}
			else if(this.props.condition == "Snow"){
	
				return (
					<div>
						<div className={style_quiz.points}>Points: {this.state.points}</div>
						<div className={style_quiz.question}>{snowQuestions[index].questionText}</div>
						<div>
							{snowQuestions[index].answerOptions.map((answerOption) => (
								<div className={style_quiz.answer} onClick={() => questionAnswered(answerOption.isCorrect)}>{answerOption.answerText}</div>
							))}
						</div>
					</div>
				);
				
			}
			else if(this.props.condition == "Fog"){
	
				return (
					<div>
						<div className={style_quiz.points}>Points: {this.state.points}</div>
						<div className={style_quiz.question}>{fogQuestions[index].questionText}</div>
						<div>
							{fogQuestions[index].answerOptions.map((answerOption) => (
								<div className={style_quiz.answer} onClick={() => questionAnswered(answerOption.isCorrect)}>{answerOption.answerText}</div>
							))}
						</div>
					</div>
				);
				
			}
			else if(this.props.condition == "Clear"){
	
				return (
					<div>
						<div className={style_quiz.points}>Points: {this.state.points}</div>
						<div className={style_quiz.question}>{clearQuestions[index].questionText}</div>
						<div>
							{clearQuestions[index].answerOptions.map((answerOption) => (
								<div className={style_quiz.answer} onClick={() => questionAnswered(answerOption.isCorrect)}>{answerOption.answerText}</div>
							))}
						</div>
					</div>
				);
				
			}
			else if(this.props.condition == "Clouds"){
	
				return (
					<div>
						<div className={style_quiz.points}>Points: {this.state.points}</div>
						<div className={style_quiz.question}>{cloudsQuestions[index].questionText}</div>
						<div>
							{cloudsQuestions[index].answerOptions.map((answerOption) => (
								<div className={style_quiz.answer} onClick={() => questionAnswered(answerOption.isCorrect)}>{answerOption.answerText}</div>
							))}
						</div>
					</div>
				);
				
			}
		}
		else 
		{
			return (
				<Response points = {this.state.points}></Response>	
			);
		}
		
	};
}

