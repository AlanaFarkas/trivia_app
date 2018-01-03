import React, { Component } from 'react';
import $ from 'jquery'; 
import './Trivia.css';

// *************

$(function() {

	$.ajax({
		url: "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium",
		dataType: 'json',
		method: 'get',
		cache: true,
			success: function(data){
			let question =  data.results[0].question;
			console.log(question);
	   	}
	});	
}); //ready

// ************

class Trivia extends Component {

	constructor(props, context) {
		super (props, context);
		
		this.state = {
      		allTrivia: []
    	}

    	this.newTrivia = this.newTrivia.bind(this);

	}; //constructor

	newTrivia(e) {

	}; //newTrivia
		  
	render() {
		return (
		<div className="button-container">
		    <button onSubmit={ this.newTrivia }>Hit Me</button>
		</div>
		);
	}; //render


}; //Trivia

export default Trivia;

// "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium"




