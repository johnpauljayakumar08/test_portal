import React,{useState,useEffect} from "react";

import axios from "axios";

export function Easy(){
	const[course,setCourse]=useState([])
  useEffect(()=>{
		fetchQuestion();
  	},[]);
  	const fetchQuestion = () =>{
		axios.get('http://192.168.253.177:8080/kgm/get/questions')
		.then((res)=>{
			console.log(res);
			setCourse(res.data.jdata)
		})
		.catch((err)=>{
			console.log(err);
		});
	};
      
    const check = [
		{
		  questionText: "It is being given that (232 + 1) is completely divisible by a whole number. Which of the following numbers is completely divisible by this number?",
		  answerOptions: [
			{
			  answerText: "(216 + 1)",
			  isCorrect: false
			},
			{
			  answerText: "(216 - 1)",
			  isCorrect: false
			},
			{
			  answerText: "(7 x 223)",
			  isCorrect: false
			},
			{
			  answerText: "(296 + 1)",
			  isCorrect: true
			}
		  ]
		},
		{
		  questionText: "What is the unit digit in {(6374)1793 x (625)317 x (341491)}?",
		  answerOptions: [
			{
			  answerText: "0",
			  isCorrect: true
			},
			{
			  answerText: "2",
			  isCorrect: false
			},
			{
			  answerText: "3",
			  isCorrect: false
			},
			{
			  answerText: "5",
			  isCorrect: false
			}
		  ]
		},
		{
		  questionText: "The largest 4 digit number exactly divisible by 88 is:",
		  answerOptions: [
			{
			  answerText: "9944",
			  isCorrect: true
			},
			{
			  answerText: "9768",
			  isCorrect: false
			},
			{
			  answerText: "9988",
			  isCorrect: false
			},
			{
			  answerText: "8888",
			  isCorrect: false
			}
		  ]
		},
		{
		  questionText: "What least number must be added to 1056, so that the sum is completely divisible by 23 ?",
		  answerOptions: [
			{
			  answerText: "2",
			  isCorrect: true
			},
			{
			  answerText: "3",
			  isCorrect: false
			},
			{
			  answerText: "18",
			  isCorrect: false
			},
			{
			  answerText: "21",
			  isCorrect: false
			}
		  ]
		},
		{
		  questionText: "Which one of the following is not a prime number?",
		  answerOptions: [
			{
			  answerText: "31",
			  isCorrect: false
			},
			{
			  answerText: "61",
			  isCorrect: false
			},
			{
			  answerText: "71",
			  isCorrect: false
			},
			{
			  answerText: "91",
			  isCorrect: true
			}
		  ]
		}
	  ]
    const questions = [
		{
		  questionText: "It is being given that (232 + 1) is completely divisible by a whole number. Which of the following numbers is completely divisible by this number?",
		  answerOptions: [
			{
			  answerText: "(216 + 1)",
			  isCorrect: false
			},
			{
			  answerText: "(216 - 1)",
			  isCorrect: false
			},
			{
			  answerText: "(7 x 223)",
			  isCorrect: false
			},
			{
			  answerText: "(296 + 1)",
			  isCorrect: true
			}
		  ]
		},
		{
		  questionText: "What is the unit digit in {(6374)1793 x (625)317 x (341491)}?",
		  answerOptions: [
			{
			  answerText: "0",
			  isCorrect: true
			},
			{
			  answerText: "2",
			  isCorrect: false
			},
			{
			  answerText: "3",
			  isCorrect: false
			},
			{
			  answerText: "5",
			  isCorrect: false
			}
		  ]
		},
		{
		  questionText: "The largest 4 digit number exactly divisible by 88 is:",
		  answerOptions: [
			{
			  answerText: "9944",
			  isCorrect: true
			},
			{
			  answerText: "9768",
			  isCorrect: false
			},
			{
			  answerText: "9988",
			  isCorrect: false
			},
			{
			  answerText: "8888",
			  isCorrect: false
			}
		  ]
		},
		{
		  questionText: "What least number must be added to 1056, so that the sum is completely divisible by 23 ?",
		  answerOptions: [
			{
			  answerText: "2",
			  isCorrect: true
			},
			{
			  answerText: "3",
			  isCorrect: false
			},
			{
			  answerText: "18",
			  isCorrect: false
			},
			{
			  answerText: "21",
			  isCorrect: false
			}
		  ]
		},
		{
		  questionText: "Which one of the following is not a prime number?",
		  answerOptions: [
			{
			  answerText: "31",
			  isCorrect: false
			},
			{
			  answerText: "61",
			  isCorrect: false
			},
			{
			  answerText: "71",
			  isCorrect: false
			},
			{
			  answerText: "91",
			  isCorrect: true
			}
		  ]
		}
	  ];

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
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return(
        <div className='app p-5'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
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