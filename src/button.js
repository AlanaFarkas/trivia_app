import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Question from './question';
// import { Row } from 'react-materialize';
// import { Col } from 'react-materialize';

export default class HitMeButton extends Component {
	render() {
	return(
		// <Button type="submit" onClick={ this.getQuestions }>Hit Me</Button>
		<Button type="submit" onClick={ this.props.onClick }>Hit Me</Button>


		);
	}
}