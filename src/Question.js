import React, { Component } from 'react';
import { Button } from 'react-materialize'
import { Row } from 'react-materialize'
import { Col } from 'react-materialize'


import './styles/css/question.css';
var axios = require('axios');
var decode = require('unescape');


// export default () => (
// 	<Button waves='light'>
// 		<Icon>thumb_up</Icon>
// 	</Button>
// )
 
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
		      amount: 50,
		      category: 9,
		      difficulty: 'medium'
		    }
		  })
		  .then( (response) => {
		  	var questionObj = response.data.results;
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




