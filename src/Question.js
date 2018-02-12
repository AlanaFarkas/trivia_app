import React, { Component } from 'react';
import { Button } from 'react-materialize'
import { Row } from 'react-materialize'
import { Col } from 'react-materialize'
import './styles/css/question.css';
var axios = require('axios');
var decode = require('unescape');


 
// var file = require('file-system');
// var fs = require('fs');
 
//file.readFile === fs.readFile // true 


class Question extends Component {

	constructor(props, context) {
		super (props, context);		
		this.state = {
      		questions: [],
      		correctAnswer: [],
      		incorrectAnswer: []
      		// answeredCorrectly: [],
      		// answeredIncorrectly: []
    	}
    	this.getQuestions = this.getQuestions.bind(this);
	}; //constructor

	getQuestions(){

		axios.get('https://opentdb.com/api.php', {
		    params: {
		      amount: 50,
		      category: 9,
		      difficulty: 'medium'
		    }
		  })
		  .then( (response) => {
		  	var questionObj = decode(response.data.results);
		  	this.state.questions.push(questionObj);
		  	console.log(this.state.questions);

		  })
		  .catch(function (error) {
		    console.log(error);
		});				
	} 
		  
	render() {
		const { questions } = this.state;

		return (
		<div className="container">
      		<div className="question-container">
      		<Row>      			
      			<Col s={6} className='grid-example'>
      				<p>{questions}</p>
      			</Col>
      		</Row>
      		</div>
		    <Button type="submit" onClick={ this.getQuestions }>Hit Me</Button>
		</div>
		);
	}; //render

}; //Question

export default Question;

// "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium"




