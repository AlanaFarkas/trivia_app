import React, { Component } from 'react';
// import $ from 'jquery'; 
import './Question.css';
var axios = require('axios');
var file = require('file-system');
var fs = require('fs');
 
file.readFile === fs.readFile // true 

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
		  	var fullQuestion = response.data.results[0].question;
		  	this.setState({questions: fullQuestion}); 


		    // console.log(response.data.results[0].question);


		  })
		  .catch(function (error) {
		    console.log(error);
		});
					
	}


	// handleFormSubmit(e) {
	
	// componentWillMount(e) {
 //    fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium")
 //    	// console.log(response => response.json());
 //      .then( response => response.json() )
 //      .then( data => this.setState({ questions: data.results[0].question }) );
 //    	console.log(this.state);
      
      // let theQuestion = this.state.questions
      // console.log(theQuestion);
      // console.log(this.state.questions);
  		// }
// 

	// }; //handleFormSumbit

	handleChange(e) {

	}

		  
	render() {
		const { questions } = this.state;

		return (
		<div className="button-container">
		    <button type="submit" onClick={ this.getQuestions }>Hit Me</button>
      		<div className="question-container">
      			{questions}
      		</div>
		</div>
		);
	}; //render


}; //Question

export default Question;

// "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium"




