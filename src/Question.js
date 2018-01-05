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

class Question extends Component {

	constructor(props, context) {
		super (props, context);
		
		this.state = {
      		questions: []
    	}

    	this.componentDidMount = this.componentDidMount.bind(this);
    	this.handleChange = this.handleChange.bind(this);

	}; //constructor

	// handleFormSubmit(e) {
	
	componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium")
      .then(response => response.json())
      .then(data => this.setState({ questions: data.results[0].question }));
      let theQuestion = this.state.questions
      console.log(theQuestion);
      // console.log(this.state.questions);

  		}
// 

	// }; //handleFormSumbit

	handleChange(e) {

	}

		  
	render() {
		const { questions } = this.state;

		return (
		<div className="button-container">
	      <div>
      	{questions}
      </div>
		    <button type="submit" onClick={ this.componentDidMount }>Hit Me</button>
		</div>
		);
	}; //render


}; //Question

export default Question;

// "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium"




