import React, { Component } from 'react';
import { Button } from 'react-materialize';
// import { Row } from 'react-materialize';
// import { Col } from 'react-materialize';

export default class HitMeButton extends Component {
	render() {
	return(
		<div className="Test">
		{/* <Button type="submit" onClick={ this.getQuestions }>Hit Me</Button> */}
		<Button type="submit">Hit Me</Button>
		</div>

		);
	}
}