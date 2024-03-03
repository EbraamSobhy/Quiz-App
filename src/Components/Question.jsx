import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="container">
				<h3>Question {question.id}</h3>
				<h5 className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<div className="ques">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					</div>
					
					<button type="submit" id="submit" className="btn btn-secondary mt-2">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}


export default Question;
