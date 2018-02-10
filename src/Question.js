import React, { Component } from 'react';
// import $ from 'jquery'; 
import './styles/css/question.css';
var axios = require('axios');
var decode = require('unescape');
 
// var file = require('file-system');
// var fs = require('fs');
 
//file.readFile === fs.readFile // true 

// *************
		// fetch('https://opentdb.com/api.php?amount=1&category=9&difficulty=medium')
		//   .then(
		//     function(response) {
		//       if (response.status !== 200) {
		//         console.log('Looks like there was a problem. Status Code: ' +
		//           response.status);
		//         return;
		//       }

		//       // Examine the text in the response
		//       response.json().then(function(data) {
		//         console.log(data);
		//       });
		//     }
		//   )
		//   .catch(function(err) {
		//     console.log('Fetch Error :-S', err);
		//   });
// ************

class Question extends Component {

	constructor(props, context) {
		super (props, context);		
		this.state = {
      		questions: []
    	}
    	this.getQuestions = this.getQuestions.bind(this);
	}; //constructor

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
		  	this.setState({questions: fullQuestion}); 
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
      			<p>{questions}</p>
      		</div>
		    <button type="submit" onClick={ this.getQuestions }>Hit Me</button>
		</div>
		);
	}; //render


}; //Question

export default Question;

// "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium"




