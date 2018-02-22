import React, { Component } from 'react';
// import { Button } from 'react-materialize'
import { Row } from 'react-materialize'
import { Col } from 'react-materialize'
import HitMeButton from './button'
import './styles/css/question.css';
var axios = require('axios');
var decode = require('unescape');
 
// var file = require('file-system');
// var fs = require('fs');
 
//file.readFile === fs.readFile // true 

// PUSH QUESTION OBJECTS INTO STATE.QUESTIONS


export default class Question extends Component {

	constructor(props, context) {
		super (props, context);		
		this.state = {
      		questions: [],
      		score: 0,
      		newGame: false
    	}
    		// this.getQuestions = this.getQuestions.bind(this);
	}; //constructor

	handleClick(i) {
	    const questions = this.state.questions.slice();
	    questions[i] = this.state.questions.push();
	    console.log(questions);
	    this.setState({

	    });
  	}

	getQuestions(){

		axios.get('https://opentdb.com/api.php', {
		    params: {
		      amount: 1,
		      category: 9,
		      difficulty: 'medium'
		    }
		  })
		  .then( (response) => {
		  	var fullQuestion = decode(response.data.results[0].question);
		  	console.log('whatup');
		  	this.setState({questions: fullQuestion}); 
		  })
		  .catch(function (error) {
		    console.log(error);
		});				
	} //getQuestions
		  
	render() {
		const { questions } = this.state;
		return (
		<div className="container">
      		<div className="question-container">
      		<Row>      			
      			<Col s={12} className='grid-example'>
      				<p>{questions}</p>
      			</Col>
      		</Row>
      		</div>
		   {/* <Button type="submit" onClick={ this.getQuestions }>Hit Me</Button> */}
		    <HitMeButton />
		</div>
		);
	}; //render

}; //Question

 // Question;





