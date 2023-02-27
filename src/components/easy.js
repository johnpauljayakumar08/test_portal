import React,{useState,useEffect} from "react";

import axios from "axios";

export function Easy(){
// 	const[course,setCourse]=useState([])
//   useEffect(()=>{
// 		fetchQuestion();
//   	},[]);
//   	const fetchQuestion = () =>{
// 		axios.get('http://192.168.253.177:8080/kgm/get/questions')
// 		.then((res)=>{
// 			console.log(res);
// 			setCourse(res.data.jdata)
// 			 console.log(course)
// 		})
// 		.catch((err)=>{
// 			console.log(err);
// 		});
// 	};
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
	const BasicApptitude=score*50;
	const IntermediateApptitude=score*0
	const AdvanceApptitude=score*0
	const handelfinish = () =>{
		axios.post("http://192.168.253.177:8080/kgm/insert/marks",{"studentsProgressDetailsId":1,
		"numericBasic":BasicApptitude,
		"numericIntermediate":IntermediateApptitude,
		"numericAdvanced":AdvanceApptitude,
		"verbalBasic":null,
		"verbalIntermediate":null,
		"verbalAdvanced":null,
		"communication":null,
		"updatedBy":null})
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
		// <div>
		// 	{
		// 		course.map((value,index)=>(
		// 			<>
					
		// 			<h3>{value.Question}</h3>
		// 			<button>{value.OptionA}</button>
		// 			<button>{value.OptionB}</button>
		// 			<button>{value.OptionC}</button>
		// 			<button>{value.OptionD}</button>
		// 			</>
					
		// 		))
		// 	}
		// </div>
		// <>
		// {
		// 	course.map((v,i)=>(

		// 		<h1>{v.Question}</h1>
		// 	))
		// }
		// </>

    );
}