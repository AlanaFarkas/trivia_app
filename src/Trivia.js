import React, { Component } from 'react';
// import $ from 'jquery'; 
import './Trivia.css';

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
      		allTrivia: []
    	}

    	this.newQuestion = this.newQuestion.bind(this);

	}; //constructor

	newQuestion(e) {
	
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

	}; //newTrivia
		  
	render() {
		return (
		<div className="button-container">
		    <button type="submit" onClick={ this.newQuestion }>Hit Me</button>
		</div>
		);
	}; //render


}; //Trivia

export default Trivia;

// "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium"




