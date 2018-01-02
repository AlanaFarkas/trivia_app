import React, { Component } from 'react';
import './Trivia.css';

class Trivia extends Component {

	constructor(props, context) {
		super (props, context);
		
		this.state = {
      		allTrivia: []
    	}

    	this.newTrivia = this.newTrivia.bind(this);

	}; //constructor

	newTrivia(e) {
		// let trivia = "Alana";
	}
		  
	render() {
		return (
		<div className="button-container">
		    <button>Hit Me</button>
		</div>
		);
	}; //render


}; //Trivia

export default Trivia;

'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium'