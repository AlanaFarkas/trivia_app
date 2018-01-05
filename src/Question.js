import React, { Component } from 'react';
// import $ from 'jquery'; 
import './Question.css';

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

class Trivia extends Component {

	constructor(props, context) {
		super (props, context);
		
		this.state = {
      		questions: []
    	}

    	this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handleChange = this.handleChange.bind(this);

	}; //constructor

	handleFormSubmit(e) {
	
		fetch('https://opentdb.com/api.php?amount=1&category=9&difficulty=medium')
		  .then(
		    function(response) {
		      if (response.status !== 200) {
		        console.log('Looks like there was a problem. Status Code: ' +
		          response.status);
		        return;
		      }

		      // Examine the text in the response
		      response.json().then(function(data) {
		        console.log(data.results[0].question);
		      });
		    }
		  )
		  .catch(function(err) {
		    console.log('Fetch Error :-S', err);
		  });

	}; //handleFormSumbit

	handleChange(e) {

	}
		  
	render() {
		return (
		<div className="button-container">
		    <button type="submit" onClick={ this.handleFormSubmit }>Hit Me</button>
		</div>
		);
	}; //render


}; //Trivia

export default Trivia;

// "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium"




