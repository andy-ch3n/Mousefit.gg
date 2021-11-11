import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFinalMouse, getFinalMouse } from './redux/state/finalMouseSlice.js';

export default function QuizPage() {
	const questions = [
		{
			questionText: 'What your preferred mouse grip?',
			type: 'mouseGrip',
			answerOptions: [
				{ answerText: 'Claw', value: 'Claw' },
				{ answerText: 'Fingertip', value: 'Fingertip' },
				{ answerText: 'Palm', value: 'Palm' },
			],
		},
		{
			questionText: 'Wired or Wireless?',
			type: 'interface',
			answerOptions: [
				{ answerText: 'Wired', value: 'wired' },
				{ answerText: 'Wireless', value: 'wireless' },
			],
		},
		{
			questionText: 'Light, Medium, or Heavy Weight?',
			type: 'weight',
			answerOptions: [
				{ answerText: 'Light', value: [0, 80]},
				{ answerText: 'Medium', value: [80, 120]},
				{ answerText: 'Heavy', value: [120, 1000]},
			],
		},
		{
			questionText: 'Small, Medium, or Large Mouse Size?',
			type: 'mouseSize',
			answerOptions: [
				{ answerText: 'Small', value: [0, 292800]},
				{ answerText: 'Medium', value: [292800, 357000]},
				{ answerText: 'Large', value: [357000, 100000000]},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [categoryType, setCategoryType] = useState('');
	const [mouseList, setMouseList] = useState([]);
	const finalMouse = useSelector(getFinalMouse);
	const dispatch = useDispatch();

	useEffect(() => {
		getMouseList();
	}, [])

	useEffect(() => {
		setCategoryType(questions[currentQuestion].type);
	}, [currentQuestion])

	const getMouseList = () => {
		fetch("http://localhost:1337/api/getAll")
			.then((res) => res.json())
			.then((result) => {
				setMouseList(result);
			},
			(error) => {
				console.log(error);
			}
		)
	}

	const filterMouseList = (filterTerm, type) => {
		let filteredList = [];
		if (type === 'mouseGrip') {
			filteredList = mouseList.filter(mouse => mouse[type][0].includes(filterTerm))
		} else if (type === 'interface') {
			filteredList = mouseList.filter(mouse => mouse[type][0].includes(filterTerm))
		} else if (type === 'weight') {
			filteredList = mouseList.filter(mouse => (mouse[type] >= filterTerm[0] && mouse[type] <= filterTerm[1]))
		} else if (type === 'mouseSize') {
			filteredList = mouseList.filter(mouse => (mouse[type] >= filterTerm[0] && mouse[type] <= filterTerm[1]))		}

		setMouseList(filteredList);
	}

	const handleAnswerClick = (filterTerm, type) => {
		filterMouseList(filterTerm, type)

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			const result = randomFinalMouse(mouseList);
			dispatch(setFinalMouse({ finalmouse: result }))
		}
	}

	function randomFinalMouse(arr) {
    return arr[Math.floor(arr.length * Math.random())];
	}

	return (
		<div className='quiz-app'>
			<div style={{opacity: '1'}}>
				<div className='question-section'>
					<div className='question-count'>
						<span>Question {currentQuestion + 1}</span>/{questions.length}
					</div>
					<div className='question-text'>{questions[currentQuestion].questionText}</div>
				</div>
				<div className='answer-section'>
					{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button className='answers-button' onClick={() => handleAnswerClick(answerOption.value, categoryType)}>{answerOption.answerText}</button>
					))}
				</div>
			</div>
	 </div>
	);
}