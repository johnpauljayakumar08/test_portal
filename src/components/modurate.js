import React, { useState } from "react";

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["Madrid", "Paris", "Berlin", "London"],
//     answer: "Paris",
//   },
//   {
//     question: "What is the tallest mountain in the world?",
//     options: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount McKinley"],
//     answer: "Mount Everest",
//   },
//   {
//     question: "What is the currency of Japan?",
//     options: ["Yuan", "Dollar", "Peso", "Yen"],
//     answer: "Yen",
//   },
// ];

// function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   const handleOptionClick = (selectedOption) => {
//     if (selectedOption === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevClick = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Quiz App</h1>
//       <p>
//         Question {currentQuestion + 1}/{questions.length}
//       </p>
//       <p>{questions[currentQuestion].question}</p>
//       <ul>
//         {questions[currentQuestion].options.map((option, index) => (
//           <li key={index} onClick={() => handleOptionClick(option)}>
//             {option}
//           </li>
//         ))}
//       </ul>
//       <p>Score: {score}</p>
//       <button onClick={handlePrevClick}>Prev</button>
//       <button onClick={handleOptionClick}>Next</button>
//     </div>
//   );
// }

// export default Quiz;
const quiz = {
	topic: 'Javascript',
	level: 'Beginner',
	totalQuestions: 10,
	perQuestionScore: 5,
	totalTime: 60, // in seconds
	questions: [
	  {
		question:
		  'Which function is used to serialize an object into a JSON string in Javascript?',
		choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
		type: 'MCQs',
		correctAnswer: 'stringify()',
	  },
	  {
		question:
		  'Which of the following keywords is used to define a variable in Javascript?',
		choices: ['var', 'let', 'var and let', 'None of the above'],
		type: 'MCQs',
		correctAnswer: 'var and let',
	  },
	  {
		question:
		  'Which of the following methods can be used to display data in some form using Javascript?',
		choices: [
		  'document.write()',
		  'console.log()',
		  'window.alert',
		  'All of the above',
		],
		type: 'MCQs',
		correctAnswer: 'All of the above',
	  },
	  {
		question: 'How can a datatype be declared to be a constant type?',
		choices: ['const', 'var', 'let', 'constant'],
		type: 'MCQs',
		correctAnswer: 'const',
	  },
	],
  }
 export function Modurate(){
	const [activeQuestion, setActiveQuestion] = React.useState(0)
	const [selectedAnswer, setSelectedAnswer] = React.useState('')
	const [showResult, setShowResult] = React.useState(false)
	const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null)
	const [result, setResult] = React.useState({
	  score: 0,
	  correctAnswers: 0,
	  wrongAnswers: 0,
	})
  
	const { questions } = quiz
	const { question, choices, correctAnswer } = questions[activeQuestion]
  
	const onClickNext = () => {
	  setSelectedAnswerIndex(null)
	  setResult((prev) =>
		selectedAnswer
		  ? {
			  ...prev,
			  score: prev.score + 5,
			  correctAnswers: prev.correctAnswers + 1,
			}
		  : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
	  )
	  if (activeQuestion !== questions.length - 1) {
		setActiveQuestion((prev) => prev + 1)
	  } else {
		setActiveQuestion(0)
		setShowResult(true)
	  }
	}
  
	const onAnswerSelected = (answer, index) => {
	  setSelectedAnswerIndex(index)
	  if (answer === correctAnswer) {
		setSelectedAnswer(true)
	  } else {
		setSelectedAnswer(false)
	  }
	}
  
	const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
	const handlePrevButtonClick = () => {
		const prevQuestion = activeQuestion - 1;
		if (prevQuestion >= 0) {
			setActiveQuestion(prevQuestion);
		}
	  };
	return (
		<>
		<h1 className="text-white mt-5 text-center">KG MICROCOLLEGE KAT- TEST</h1>
	  <div className="quiz-container">
		{!showResult ? (
		  <div>
			<div>
			  <span className="active-question-no">
				{addLeadingZero(activeQuestion + 1)}
			  </span>
			  <span className="total-question">
				/{addLeadingZero(questions.length)}
			  </span>
			</div>
			<h2>{question}</h2>
			<ul>
			  {choices.map((answer, index) => (
				<li
				  onClick={() => onAnswerSelected(answer, index)}
				  key={answer}
				  className={
					selectedAnswerIndex === index ? 'selected-answer' : null
				  }
				>
				  {answer}
				</li>
			  ))}
			</ul>
			
			<div className="flex-right">
			  {activeQuestion > 0 && <button className="mr-auto"   onClick={handlePrevButtonClick}>
				 Prev
			  </button>}
			  <button
				onClick={onClickNext}
				
			  >
				{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
			  </button>
			</div>
		  </div>
		) : (
		  <div className="result">
			<h3>Result</h3>
			<p>
			  Total Question: <span>{questions.length}</span>
			</p>
			<p>
			  Total Score:<span> {result.score}</span>
			</p>
			<p>
			  Correct Answers:<span> {result.correctAnswers}</span>
			</p>
			<p>
			  Wrong Answers:<span> {result.wrongAnswers}</span>
			</p>
		  </div>
		)}
	  </div>
		</>
		
	)
 }
