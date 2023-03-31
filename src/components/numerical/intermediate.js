import React,{useState,useEffect} from "react";

import axios from "axios";
import { useParams } from 'react-router-dom';
export function Intermediatenumerical(){
	const { studentsProgressDetailsId } = useParams();
	const [products, setProducts] = useState([]);
		useEffect(()=>{
			axios.get("http://192.168.253.177:8080/kgm/get/n1/questions")

			.then((res) => {
				console.log(res)
				setProducts(res.data.jData)
				console.log(products)
				
			})
			
				
		},[]);

    

  
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
            if(score>=1){

                window.location.href = "/modurate";
            }
			
			
			
		}
		

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < products.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	if(products.length==0){
		return <p>Loading... </p>
		

	}
	const BasicApptitude=100;
	const IntermediateApptitude=score*50;
	const AdvanceApptitude=score*0
	const handelfinish = () =>{
		axios.post("http://192.168.253.177:8080/kgm/insert/marks",{"studentsProgressDetailsId":studentsProgressDetailsId,
		"numericBasic":BasicApptitude,
		"numericIntermediate":IntermediateApptitude,
		"numericAdvanced":AdvanceApptitude,
		"verbalBasic":null,
		"verbalIntermediate":null,
		"verbalAdvanced":null,
		"communication":null,
		"updatedBy":null})
		.then(function (res) {
			if (res.data.responseMsg === 'error') {
				alert("Error");
				window.location.reload();
			}
			else if (res.data.responseMsg === 'success') {
				
				window.location.href = '/';
			}
		})
	}
    return(

        <div className='app p-5'>
			{showScore ? (
				<div className='text-white'>
					 
					{/* You scored {score} out of {products.length} */}
					<h1>Thank You!..</h1>
					<h3>Basic Apptitude score :{BasicApptitude}</h3>
					<h3>Intermediate Apptitude score: {IntermediateApptitude}</h3>
					<h3>Advance Apptitude score : {AdvanceApptitude}</h3>
					<input type="button" onClick={handelfinish}  value="Finish" className="btn btn-success"/>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							{/* <span>Question {questions + 1}</span> */}
						</div>
						<div className='question-text'>{products[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{products[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		

    );
}